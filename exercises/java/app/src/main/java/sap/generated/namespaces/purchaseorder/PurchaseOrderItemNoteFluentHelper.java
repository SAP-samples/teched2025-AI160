/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperRead;
import com.sap.generated.namespaces.purchaseorder.selectable.PurchaseOrderItemNoteSelectable;

import javax.annotation.Nonnull;


/**
 * Fluent helper to fetch multiple {@link PurchaseOrderItemNote PurchaseOrderItemNote} entities. This fluent helper allows methods which modify the underlying query to be called before executing the query itself.
 * 
 */
public class PurchaseOrderItemNoteFluentHelper
    extends FluentHelperRead<PurchaseOrderItemNoteFluentHelper, PurchaseOrderItemNote, PurchaseOrderItemNoteSelectable>
{


    /**
     * Creates a fluent helper using the specified service path and entity collection to send the read requests.
     * 
     * @param entityCollection
     *     The entity collection to direct the requests to.
     * @param servicePath
     *     The service path to direct the read requests to.
     */
    public PurchaseOrderItemNoteFluentHelper(
        @Nonnull
        final String servicePath,
        @Nonnull
        final String entityCollection) {
        super(servicePath, entityCollection);
    }

    @Override
    @Nonnull
    protected Class<PurchaseOrderItemNote> getEntityClass() {
        return PurchaseOrderItemNote.class;
    }

}
