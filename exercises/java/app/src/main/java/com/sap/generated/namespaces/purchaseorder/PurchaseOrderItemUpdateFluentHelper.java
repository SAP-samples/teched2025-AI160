/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperUpdate;

import javax.annotation.Nonnull;


/**
 * Fluent helper to update an existing {@link PurchaseOrderItem PurchaseOrderItem} entity and save it to the S/4HANA system.<p>
 * To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
 * 
 */
public class PurchaseOrderItemUpdateFluentHelper
    extends FluentHelperUpdate<PurchaseOrderItemUpdateFluentHelper, PurchaseOrderItem>
{

    /**
     * {@link PurchaseOrderItem PurchaseOrderItem} entity object that will be updated in the S/4HANA system.
     * 
     */
    private final PurchaseOrderItem entity;

    /**
     * Creates a fluent helper object that will update a {@link PurchaseOrderItem PurchaseOrderItem} entity on the OData endpoint. To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
     * 
     * @param servicePath
     *     The service path to direct the update requests to.
     * @param entity
     *     The PurchaseOrderItem to take the updated values from.
     */
    public PurchaseOrderItemUpdateFluentHelper(
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
