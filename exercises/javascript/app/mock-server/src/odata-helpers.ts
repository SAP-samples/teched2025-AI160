import express from 'express';
import { createLogger } from '@sap-cloud-sdk/util';

const logger = createLogger('odata-helpers');

/** Returns true if the property name refers to a navigation property (i.e., begins with "to_") */
function isNavigationProperty(propertyName) {
    return propertyName.startsWith('to_');
};

/**
 * Removes the first segment of the navigation property path
 * @param {string} propertyName Navigation property path
 */
function removeFirstNavigationPath(propertyName: string) {
    return propertyName.substring(propertyName.split('/', 1)[0].length + 1);
};

/**
 * Reduce the given results based on the given filter.
 * @param {any[]} result result items to filter
 * @param {string} singleFilter filter definition
 */
function applyFilter(result: any[], singleFilter: string) {
    // Handle complex navigation property filters with any() operations
    if (singleFilter.includes('/any(')) {
        return applyNavigationFilter(result, singleFilter);
    } else if (singleFilter.includes(' eq \'')) {
        const filterRegex = /^\(?(\w+) eq '(.*)'\)?$/;
        const [, filterProperty, filterValue] = filterRegex.exec(singleFilter);
        return applyEqFilter(result, filterProperty, filterValue);
    } else if (singleFilter.includes(' ne \'')) {
        const filterRegex = /^\(?(\w+) ne '(.*)'\)?$/;
        const [, filterProperty, filterValue] = filterRegex.exec(singleFilter);
        return applyNeFilter(result, filterProperty, filterValue);
    } else if (singleFilter.includes(' ge datetime\'')) {
        const filterRegex = /^\(?(\w+) ge datetime'(.*)'\)?$/;
        const [, filterProperty, filterValue] = filterRegex.exec(singleFilter);
        return applyGeFilter(result, filterProperty, transformDateTime(filterValue));
    } else if (singleFilter.includes(' le datetime\'')) {
        const filterRegex = /^\(?(\w+) le datetime'(.*)'\)?$/;
        const [, filterProperty, filterValue] = filterRegex.exec(singleFilter);
        return applyLeFilter(result, filterProperty, transformDateTime(filterValue));
    } else if (singleFilter.includes(' lt ')) {
        return applyLtFilter(result, singleFilter);
    } else if (singleFilter.includes(' gt ')) {
        return applyGtFilter(result, singleFilter);
    }
}

/**
 * Apply navigation property filters with any() operations
 * @param {any[]} result result items to filter
 * @param {string} filter filter definition with navigation properties
 */
function applyNavigationFilter(result: any[], filter: string) {
    logger.debug(`Applying navigation filter: ${filter}`);
    // Parse complex filter like: _PurchaseOrderItem/_PurchaseOrderScheduleLineTP/any(a0:(a0/ScheduleLineDeliveryDate lt 2025-08-27))
    const anyRegex = /^(.+?)\/any\((\w+):\((.+?)\)\)$/;
    const match = anyRegex.exec(filter);
    
    if (!match) {
        logger.warn(`Could not parse navigation filter: ${filter}`);
        return result;
    }
    
    const [, navigationPath, aliasVar, innerCondition] = match;
    logger.debug(`Parsed navigation filter - path: ${navigationPath}, alias: ${aliasVar}, condition: ${innerCondition}`);

    return result.filter(item => {
        const matches = evaluateNavigationPath(item, navigationPath, aliasVar, innerCondition);
        logger.debug(`Item ${item.PurchaseOrder} matches filter: ${matches}`);
        return matches;
    });
}

/**
 * Evaluate navigation path with any() condition
 * @param {any} item current item to evaluate
 * @param {string} navigationPath path like "_PurchaseOrderItem/_PurchaseOrderScheduleLineTP"
 * @param {string} aliasVar alias variable like "a0"
 * @param {string} innerCondition condition like "a0/ScheduleLineDeliveryDate lt 2025-08-27"
 */
function evaluateNavigationPath(item: any, navigationPath: string, aliasVar: string, innerCondition: string) {
    // Convert OData navigation property names to actual property names
    const pathSegments = navigationPath.split('/').map(segment => {
        // Convert _PurchaseOrderItem to to_PurchaseOrderItem
        if (segment.startsWith('_') && !segment.startsWith('to_')) {
            return 'to' + segment;
        }
        // Convert _PurchaseOrderScheduleLineTP to to_ScheduleLine
        if (segment === '_PurchaseOrderScheduleLineTP') {
            return 'to_ScheduleLine';
        }
        return segment;
    });
    
    // Navigate through the path
    let currentData = item;
    for (const segment of pathSegments) {
        if (!currentData || !currentData[segment]) {
            return false;
        }
        currentData = currentData[segment];
        
        // If it's a navigation property with results, get the results array
        if (currentData && currentData.results) {
            currentData = currentData.results;
        }
    }
    
    // If we don't have an array at this point, return false
    if (!Array.isArray(currentData)) {
        return false;
    }
    
    // Apply the any() condition - check if any item in the array matches the condition
    return currentData.some(arrayItem => {
        return evaluateInnerCondition(arrayItem, aliasVar, innerCondition);
    });
}

/**
 * Evaluate inner condition for any() operation
 * @param {any} item current array item
 * @param {string} aliasVar alias variable
 * @param {string} condition condition to evaluate
 */
function evaluateInnerCondition(item: any, aliasVar: string, condition: string) {
    // Parse condition like "a0/ScheduleLineDeliveryDate lt 2025-08-27"
    const conditionRegex = new RegExp(`^${aliasVar}\/(.+?)\\s+(lt|gt|le|ge|eq|ne)\\s+(.+)$`);
    const match = conditionRegex.exec(condition);
    
    if (!match) {
        logger.warn(`Could not parse inner condition: ${condition}`);
        return false;
    }
    
    const [, propertyPath, operator, value] = match;
    const propertyValue = getNestedProperty(item, propertyPath);
    
    if (propertyValue === undefined) {
        return false;
    }
    
    // Convert the comparison value based on the property type
    let comparisonValue = value;
    
    // Handle date comparisons
    if (propertyPath.includes('Date') && !value.startsWith('/Date(')) {
        // Convert YYYY-MM-DD format to OData date format
        const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
        if (dateMatch) {
            const [, year, month, day] = dateMatch;
            comparisonValue = `/Date(${Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day))})/`;
        }
    }
    
    // Apply the operator
    switch (operator) {
        case 'lt':
            return propertyValue < comparisonValue;
        case 'gt':
            return propertyValue > comparisonValue;
        case 'le':
            return propertyValue <= comparisonValue;
        case 'ge':
            return propertyValue >= comparisonValue;
        case 'eq':
            return propertyValue === comparisonValue;
        case 'ne':
            return propertyValue !== comparisonValue;
        default:
            return false;
    }
}

/**
 * Get nested property value from object
 * @param {any} obj object to get property from
 * @param {string} path property path like "ScheduleLineDeliveryDate"
 */
function getNestedProperty(obj: any, path: string) {
    return path.split('/').reduce((current, prop) => {
        return current && current[prop] !== undefined ? current[prop] : undefined;
    }, obj);
}

/**
 * Apply less than filter
 * @param {any[]} result result items to filter
 * @param {string} filter filter definition
 */
function applyLtFilter(result: any[], filter: string) {
    const filterRegex = /^\(?(\w+)\s+lt\s+(.+?)\)?$/;
    const match = filterRegex.exec(filter);
    if (!match) return result;
    
    const [, filterProperty, filterValue] = match;
    let comparisonValue = filterValue;
    
    // Handle date format conversion
    if (filterProperty.includes('Date') && !filterValue.startsWith('/Date(')) {
        const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(filterValue);
        if (dateMatch) {
            const [, year, month, day] = dateMatch;
            comparisonValue = `/Date(${Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day))})/`;
        }
    }
    
    return result.filter(item => item[filterProperty] < comparisonValue);
}

/**
 * Apply greater than filter
 * @param {any[]} result result items to filter
 * @param {string} filter filter definition
 */
function applyGtFilter(result: any[], filter: string) {
    const filterRegex = /^\(?(\w+)\s+gt\s+(.+?)\)?$/;
    const match = filterRegex.exec(filter);
    if (!match) return result;
    
    const [, filterProperty, filterValue] = match;
    let comparisonValue = filterValue;
    
    // Handle date format conversion
    if (filterProperty.includes('Date') && !filterValue.startsWith('/Date(')) {
        const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(filterValue);
        if (dateMatch) {
            const [, year, month, day] = dateMatch;
            comparisonValue = `/Date(${Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day))})/`;
        }
    }
    
    return result.filter(item => item[filterProperty] > comparisonValue);
}

/**
 * Transform datetime defintion to OData v2 date
 * @param {string} dateTime
 */
function transformDateTime(dateTime: string) {
    const [dateParts] = dateTime.split('T');
    const [year, month, day] = dateParts.split('-').map(p => parseInt(p));
    return `/Date(${Date.UTC(year, month-1, day)})/`;
}

function applyEqFilter(result, filterProperty, filterValue) {
    return result.filter(item => item[filterProperty] === filterValue);
}

function applyNeFilter(result, filterProperty, filterValue) {
    return result.filter(item => item[filterProperty] !== filterValue);
}

function applyGeFilter(result, filterProperty, filterValue) {
    return result.filter(item => item[filterProperty] >= filterValue);
}

function applyLeFilter(result, filterProperty, filterValue) {
    return result.filter(item => item[filterProperty] <= filterValue);
}

/**
 * Deals with navigation properties of the supplied entity per the expand specification.
 * Navigation properties that are part of the expanded properties are included in the result object.
 * The value of navigation properties that shall not be expanded is set to an object { "__deferred": ... }.
 * Non-navigation properties are left untouched.
 *
 * The transformation is applied recursively.
 * @param {*} entity Entity to process
 * @param {string[]} expandedProperties Navigation properties to include as expanded properties.
 */
const handleEntityNavPropertiesForExpand = function(entity: any, expandedProperties: string[] = []) {
    return Object.entries(entity).reduce(function(result, [key, value]) {
        if(isNavigationProperty(key)) {
            if(expandedProperties.includes(key) ||
                expandedProperties.find( (property) => property.startsWith(key))) {
                // TODO: handle single-valued nav properties
                if(value && (value as any).results && (value as any).results.length > 0) {
                    const associatedEntities = (value as any).results;
                    // Recursively handle expansion of navigation properties
                    const expandedPropertiesForNavProperty = expandedProperties
                        .filter( (property) => property.startsWith(key + '/') )
                        .map(removeFirstNavigationPath);
                    // Construct a new object, do not modify value
                    result[key] = {
                        results: handleEntitySetNavPropertiesForExpand((value as any).results, expandedPropertiesForNavProperty)
                    };
                } else {
                    result[key] = value;
                }
            } else {
                result[key] = {
                    "__deferred": {
                        "uri": `${entity.__metadata.uri}/${key}`
                    }
                };
            }
        } else {
            result[key] = value;
        }

        return result;
    }, {});
};

/**
 * Deals with navigation properties of the supplied entity set per the expand specification.
 * @see handleEntityNavPropertiesForExpand
 */
const handleEntitySetNavPropertiesForExpand = function(entityArray, expandedProperties) {
    return entityArray.map( (item) => handleEntityNavPropertiesForExpand(item, expandedProperties) );
}

/**
 * Reduces the entity to only contain the selected properties (and meta properties).
 * @param {Object} entity Entity to reduce
 * @param {string[]} selectedProperties Properties to keep, or all, if empty
 */
const reduceEntityToSelect = function(entity: any, selectedProperties: string[] = []) {
    if(0 === selectedProperties.length) {
        return entity;
    }

    return Object.entries(entity).reduce(function(result, [key, value]) {
        const isNavProperty = isNavigationProperty(key);
        if('__metadata' === key || selectedProperties.includes(key) ||
                (selectedProperties.includes('*')) && !isNavProperty) {
            result[key] = value;
        }
        else if(isNavProperty) {
            const selectedPropertiesForNavProperty = selectedProperties
                .filter( (item) => item.startsWith(key + '/') )
                .map( removeFirstNavigationPath );
            if(selectedPropertiesForNavProperty.length > 0 && value) {
                // TODO: handle single-valued nav properties
                const associatedEntities = (value as any).results;
                // Construct a new object, do not modify value
                result[key] = { results: reduceEntitySetToSelect(associatedEntities, selectedPropertiesForNavProperty)};
            }
        }
        return result;
    }, {});
};

/**
 * Reduces all entities of the given array to only contain the selected properties (and meta properties)
 * @param {Object[]} entityArray Array of entities to reduce
 * @param {string[]} selectedProperties Properties to keep, or all, if empty
 */
function reduceEntitySetToSelect(entityArray, selectedProperties) {
    return entityArray.map(item => reduceEntityToSelect(item, selectedProperties));
};

function replaceHost(text, req) {
    const urlPrefix = `${req.protocol}://${req.get('host')}`;
    return text.replace(/https:\/\/{host}:{port}/g, urlPrefix);
};

/**
 * Returns the method and url as an array
 * @param {string} subRequest Part of a batch request
 */
function findRequestMetadata(subRequest: string) {
    const [, request, payload] = subRequest.split('\n\n');
    const data = payload.trim()

    const [requestMetaData, ...requestHeaders] = request.split('\n');
    const [method, url] = requestMetaData.split(' ');

    const headers = requestHeaders
        .map(h => h.split(':'))
        .reduce((obj, [key, value]) => {
            return { ...obj, [key.trim()]: value.trim() };
        }, {});

    return {
        method,
        url,
        headers,
        ...(data ? { data: data } : {})
    };
}

/**
 * Split changeset into sub requests
 * @param {string} changeset
 */
function splitChangeset(changeset: string) {
    const changesetId = changeset.split('\n')[0].split('=')[1];
    return changeset.split(`--${changesetId}\n`).slice(1);
}

/**
 * Execute a rub request of batch
 * @param {string} baseUrl The baseurl of the current request
 * @param {string} batchPart The request definition in the batch request
 */
async function executeBatchSubrequest(baseUrl: string, batchPart: string) {
    const config = findRequestMetadata(batchPart);
    const url = `${baseUrl}${config.url}`;

    const fetchOptions: RequestInit = {
        method: config.method,
        headers: config.headers,
        ...(config.data ? { body: config.data } : {})
    };

    return fetch(url, fetchOptions)
        .then(async response => {
            const data = await response.text();
            let parsedData;
            try {
                parsedData = JSON.parse(data);
            } catch {
                parsedData = data;
            }
            
            return wrapSingleRequestResponse({
                status: response.status,
                statusText: response.statusText,
                headers: Object.fromEntries(response.headers.entries()),
                data: parsedData
            });
        });
}

/**
 * Execute all subrequests for a changeset
 * @param {string} baseUrl Base url for the current request, to be used with the sub request
 * @param {string} changeset Definition of the changeset, containing definitions for all sub requests
 */
async function executeChangeset(baseUrl: string, changeset: string) {
    return Promise.all(
        splitChangeset(changeset).map(changesetPart => executeBatchSubrequest(baseUrl, changesetPart))
    )
    .then(result => wrapChangesetResponse(result))
    .catch(error => {
        return wrapSingleRequestResponse(error.response)
    });
}

/**
 * Create a batch response from the response for a single sub request
 * @param response single response of a sub request
 */
function wrapSingleRequestResponse(response: {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    data: any;
}) {
    const body = [
        `HTTP/1.1 ${response.status} ${response.statusText}`,
        `Content-Type: ${response.headers['content-type']}`,
        `Content-Length: ${response.headers['content-length']}`,
        'dataserviceversion: 2.0',
        'cache-control: no-store, no-cache',
        '',
        JSON.stringify(response.data)
    ].join('\n');

    const header = [
        'Content-Type: application/http',
        `Content-Length: ${body.length}`,
        'content-transfer-encoding: binary'
    ].join('\n');

    return `${header}\n\n${body}`;
}

/**
 * Create a changeset response for the single responses of all requests within a batch changeset
 * @param {string[]} responses wrapped responses for the single sub requests
 */
function wrapChangesetResponse(responses: string[]) {
    const responsesBody = responses.join(`\n--changeset\n`);
    const header = [
        `Content-Type: multipart/mixed; boundary=changeset`,
        `Content-Length: ${responsesBody.length}`
    ];

    return [
        ...header,
        '',
        `--changeset`,
        responsesBody,
        `--changeset--`
    ].join('\n');
}

/**
 * Wrap all first level responses for a batch request in a batch response
 * @param {string[]} responses All responses for sub requests
 */
function wrapBatchResponse(responses: string[]) {
    return [
        `--batch`,
        responses.join(`\n--batch\n`),
        `--batch--`
    ].join('\n');
}

/** Send the result as an OData response */
export function sendAsODataResult(req, res, next) {
    const result = res.result;
    const arrayWrapped = Array.isArray(result) ? { results: result } : result;
    const bodyAsString = JSON.stringify({ d: arrayWrapped });
    const bodyWithHost = replaceHost(bodyAsString, req);

    res.set('Content-Type', 'application/json');
    res.send(bodyWithHost);
}

/** Send 404 response if result is undefined */
export function send404IfNotFound(req, res, next) {
    if(res.result) {
        next();
    } else {
        logger.error("No result, responding with 404")
        res.sendStatus(404);
    }
}

/** Send 204 response for no content */
export function send204NoContent(req, res, next) {
    res.sendStatus(204);
}

/** Set 201 response for created */
export function set201Created(req, res, next) {
    res.status(201);
    const location = res.result && res.result.__metadata ? res.result.__metadata.uri : '';
    res.location(replaceHost(location, req));
    next();
}

/** Expand each result entity (and replace not queried content with __deferred) */
export function expand(req, res, next) {
    const expandQuery = req.query.$expand;
    const propertiesToExpand = expandQuery? expandQuery.split(',') : [];

    res.result = Array.isArray(res.result)?
        handleEntitySetNavPropertiesForExpand(res.result, propertiesToExpand) :
        handleEntityNavPropertiesForExpand(res.result, propertiesToExpand);

    next();
}

/** Filter the result set per the $filter query option */
export function filter(req, res, next) {
    var filterQuery = req.query.$filter;
    if(filterQuery) {
        // dirty hack to only accept the first level of and expressions
        filterQuery = filterQuery.startsWith('(') && filterQuery.endsWith(')') ? filterQuery.slice(1,-1) : filterQuery;
        const singleFilters = filterQuery.split('and').map(f => f.trim());
        singleFilters.forEach(singleFilter => {
            logger.debug(`Applying single filter: ${singleFilter}`);
            res.result = applyFilter(res.result, singleFilter);
        });
    }

    next();
}

/** Sort the result set per the $orderby query option (not yet implemented) */
export function sort(req, res, next) {
    const orderbyQuery = req.query.$orderby;

    if(orderbyQuery) {
        const [sortByProperty,sortOrder] = orderbyQuery.split(' ');
        res.result.sort(function(a, b) {
            const valueA = a[sortByProperty];
            const valueB = b[sortByProperty];
            if(undefined === valueA || undefined === valueB) {
                logger.warn(`Invalid property for sorting: ${sortByProperty}`);
                return 0;
            }
            const compareResult = valueA < valueB ? -1 : (valueA == valueB ? 0: 1);
            // if no sort order has been specified, sort ascending
            return (sortOrder == 'desc' ? -1 : 1) * compareResult;
        });
    }
    next();
}

/** Select only the properties of each result entity specified by the $select query option */
export function select(req, res, next) {
    const selectQuery = req.query.$select;

    if(selectQuery) {
        const selectedProperties = selectQuery.split(',');
        res.result = Array.isArray(res.result) ?
            reduceEntitySetToSelect(res.result, selectedProperties) :
            reduceEntityToSelect(res.result, selectedProperties);
    }

    next();
}

/** Limits the result set per the $top and $skip query options (not yet implemented) */
export function limit(req, res, next) {
    next();
}

/**
 * Executes batch requests.
 * Errors for changesets will not roll back any changes.
 */
export function batch(req, res, next) {
    const allLines = req.body.trim().split('\n');
    const batchId = allLines[0];
    const batchParts = req.body.trim().split(`${batchId}\n`).filter(line => line);
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    const requests = batchParts.map(batchPart => {
        if (batchPart.startsWith('Content-Type: multipart/mixed;')) {
            return executeChangeset(baseUrl, batchPart);
        }
        return executeBatchSubrequest(baseUrl, batchPart)
            .catch(error => {
                return wrapSingleRequestResponse(error.response)
            });
    });

    const chainedRequests = requests.reduce(async (promiseChain, req) => {
        return promiseChain.then(responses => req.then(response => [...responses, response]));
    }, Promise.resolve([]))

    chainedRequests
        .then(responses => {
            res.send(wrapBatchResponse(responses));
        })
        .catch(e => {
            logger.error(e);
            res.send(e);
        });
}

/** All generic middlewares for entity sets */
export function middlewareForSet() {
    return [expand, filter, sort, select, limit, sendAsODataResult];
}

/** All generic middlewares for single entities */
export function middlewareForEntity() {
    return [send404IfNotFound, expand, select, sendAsODataResult];
}

/** Create middleware chain for update based on retrieve and modify function */
export function middlewareForUpdate(retrieveFunction, modifyFunction) {
    return [retrieveFunction, send404IfNotFound, express.json(), modifyFunction, send204NoContent];
}

export function middlewareForCreate(createFunction) {
    return [express.json(), createFunction, set201Created, sendAsODataResult]
}

export function middlewareForBatch() {
    return [express.text({ type: () => true }), set201Created, batch];
}
