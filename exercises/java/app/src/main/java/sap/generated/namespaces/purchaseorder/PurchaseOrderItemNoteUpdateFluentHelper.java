/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperUpdate;

import javax.annotation.Nonnull;


/**
 * Fluent helper to update an existing {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity and save it to the S/4HANA system.<p>
 * To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
 * 
 */
public class PurchaseOrderItemNoteUpdateFluentHelper
    extends FluentHelperUpdate<PurchaseOrderItemNoteUpdateFluentHelper, PurchaseOrderItemNote>
{

    /**
     * {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity object that will be updated in the S/4HANA system.
     * 
     */
    private final PurchaseOrderItemNote entity;

    /**
     * Creates a fluent helper object that will update a {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity on the OData endpoint. To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
     * 
     * @param servicePath
     *     The service path to direct the update requests to.
     * @param entity
     *     The PurchaseOrderItemNote to take the updated values from.
     */
    public PurchaseOrderItemNoteUpdateFluentHelper(
        @Nonnull
        final String servicePath,
        @Nonnull
        final PurchaseOrderItemNote entity,
        @Nonnull
        final String entityCollection) {
        super(servicePath, entityCollection);
        this.entity = entity;
    }

    @Override
    @Nonnull
    protected PurchaseOrderItemNote getEntity() {
        return entity;
    }

}
