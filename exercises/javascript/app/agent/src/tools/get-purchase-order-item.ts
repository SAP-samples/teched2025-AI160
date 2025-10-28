import { tool } from "@langchain/core/tools";
import { BASE_URL_API_PURCHASEORDER_PROCESS_SRV } from "../setup";
import * as z from 'zod/v4';
import { createLogger } from '@sap-cloud-sdk/util';

const logger = createLogger('get-po-item-tool');

type SearchParams = {
    plant?: string;
    deliverAddressCityName?: string;
    deliverAddressCountry?: string;
};

export const getPurchaseOrderItemsTool = tool(
    async ({
        plant,
        deliverAddressCityName,
        deliverAddressCountry
    }: SearchParams) => {
        return fetchPurchaseOrderItems(
            plant,
            deliverAddressCityName,
            deliverAddressCountry
        );
    },
    {
        name: 'get_purchase_order_items',
        description: 'Fetch purchase order items based on plant filter',
        schema: z.object({
            plant: z.string().meta({ description: 'The plant to filter by' }).min(4).optional(),
            deliverAddressCityName: z.string().meta({ description: 'The city name of the delivery address to filter by' }).min(1).optional(),
            deliverAddressCountry: z.string().meta({ description: 'The country of the delivery address to filter by' }).min(2).max(2).optional()
        })
    }
);

async function fetchPurchaseOrderItems(
    plant?: string,
    deliverAddressCityName?: string,
    deliverAddressCountry?: string
) {
    const url = new URL(`${BASE_URL_API_PURCHASEORDER_PROCESS_SRV}A_PurchaseOrderItem`);
    const queryParams = new URLSearchParams();
    if (plant) {
        queryParams.append('$filter', `Plant eq '${plant}'`);
    }
    if (deliverAddressCityName) {
        const existingFilter = queryParams.get('$filter');
        const cityFilter = `DeliveryAddressCityName eq '${deliverAddressCityName}'`;
        queryParams.set('$filter', existingFilter ? `${existingFilter} and ${cityFilter}` : cityFilter);
    }
    if (deliverAddressCountry) {
        const existingFilter = queryParams.get('$filter');
        const countryFilter = `DeliveryAddressCountry eq '${deliverAddressCountry}'`;
        queryParams.set('$filter', existingFilter ? `${existingFilter} and ${countryFilter}` : countryFilter);
    }
    queryParams.append('$expand', 'to_ScheduleLine,to_PurchaseOrderItemNote');
    url.search = queryParams.toString();

    logger.debug(`Fetching purchase order items from: ${url.toString()}`);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error: any) {
        logger.error(`Error fetching purchase order items: ${error.message}`);
        throw new Error(`Failed to fetch purchase order items: ${error.message}`);
    }
}
