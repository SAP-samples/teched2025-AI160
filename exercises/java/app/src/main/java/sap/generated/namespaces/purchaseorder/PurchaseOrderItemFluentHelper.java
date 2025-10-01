/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperRead;
import com.sap.generated.namespaces.purchaseorder.selectable.PurchaseOrderItemSelectable;

import javax.annotation.Nonnull;


/**
 * Fluent helper to fetch multiple {@link PurchaseOrderItem PurchaseOrderItem} entities. This fluent helper allows methods which modify the underlying query to be called before executing the query itself.
 * 
 */
public class PurchaseOrderItemFluentHelper
    extends FluentHelperRead<PurchaseOrderItemFluentHelper, PurchaseOrderItem, PurchaseOrderItemSelectable>
{


    /**
     * Creates a fluent helper using the specified service path and entity collection to send the read requests.
     * 
     * @param entityCollection
     *     The entity collection to direct the requests to.
     * @param servicePath
     *     The service path to direct the read requests to.
     */
    public PurchaseOrderItemFluentHelper(
        @Nonnull
        final String servicePath,
        @Nonnull
        final String entityCollection) {
        super(servicePath, entityCollection);
    }

    @Override
    @Nonnull
    protected Class<PurchaseOrderItem> getEntityClass() {
        return PurchaseOrderItem.class;
    }

}
