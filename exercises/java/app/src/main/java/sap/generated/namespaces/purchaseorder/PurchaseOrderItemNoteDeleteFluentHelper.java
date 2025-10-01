/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperDelete;

import javax.annotation.Nonnull;


/**
 * Fluent helper to delete an existing {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity in the S/4HANA system.<p>
 * To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
 * 
 */
public class PurchaseOrderItemNoteDeleteFluentHelper
    extends FluentHelperDelete<PurchaseOrderItemNoteDeleteFluentHelper, PurchaseOrderItemNote>
{

    /**
     * {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity object that will be deleted in the S/4HANA system.
     * 
     */
    private final PurchaseOrderItemNote entity;

    /**
     * Creates a fluent helper object that will delete a {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity on the OData endpoint. To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
     * 
     * @param entityCollection
     *     The entity collection to direct the update requests to.
     * @param servicePath
     *     The service path to direct the update requests to.
     * @param entity
     *     The PurchaseOrderItemNote to delete from the endpoint.
     */
    public PurchaseOrderItemNoteDeleteFluentHelper(
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
