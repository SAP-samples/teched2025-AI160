/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperCreate;

import javax.annotation.Nonnull;


/**
 * Fluent helper to create a new {@link PurchaseOrderItem PurchaseOrderItem} entity and save it to the S/4HANA system.<p>
 * To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
 * 
 */
public class PurchaseOrderItemCreateFluentHelper
    extends FluentHelperCreate<PurchaseOrderItemCreateFluentHelper, PurchaseOrderItem>
{

    /**
     * {@link PurchaseOrderItem PurchaseOrderItem} entity object that will be created in the S/4HANA system.
     * 
     */
    private final PurchaseOrderItem entity;

    /**
     * Creates a fluent helper object that will create a {@link PurchaseOrderItem PurchaseOrderItem} entity on the OData endpoint. To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
     * 
     * @param entityCollection
     *     Entity Collection  to direct the create requests to.
     * @param servicePath
     *     The service path to direct the create requests to.
     * @param entity
     *     The PurchaseOrderItem to create.
     */
    public PurchaseOrderItemCreateFluentHelper(
        @Nonnull
        final String servicePath,
        @Nonnull
        final PurchaseOrderItem entity,
        @Nonnull
        final String entityCollection) {
        super(servicePath, entityCollection);
        this.entity = entity;
    }

    @Override
    @Nonnull
    protected PurchaseOrderItem getEntity() {
        return entity;
    }

}
