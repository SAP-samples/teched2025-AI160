/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.google.common.collect.Maps;
import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperByKey;
import com.sap.generated.namespaces.purchaseorder.selectable.PurchaseOrderItemSelectable;

import javax.annotation.Nonnull;
import java.util.Map;


/**
 * Fluent helper to fetch a single {@link PurchaseOrderItem PurchaseOrderItem} entity using key fields. This fluent helper allows methods which modify the underlying query to be called before executing the query itself.
 * 
 */
public class PurchaseOrderItemByKeyFluentHelper
    extends FluentHelperByKey<PurchaseOrderItemByKeyFluentHelper, PurchaseOrderItem, PurchaseOrderItemSelectable>
{

    private final Map<String, Object> key = Maps.newLinkedHashMap();

    /**
     * Creates a fluent helper object that will fetch a single {@link PurchaseOrderItem PurchaseOrderItem} entity with the provided key field values. To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
     * 
     * @param entityCollection
     *     Entity Collection to be used to fetch a single {@code PurchaseOrderItem}
     * @param servicePath
     *     Service path to be used to fetch a single {@code PurchaseOrderItem}
     * @param purchaseOrder
     *     Purchase Order Number<p>Constraints: Not nullable, Maximum length: 10</p>
     * @param purchaseOrderItem
     *     Item Number of Purchase Order<p>Constraints: Not nullable, Maximum length: 5</p>
     */
    public PurchaseOrderItemByKeyFluentHelper(
        @Nonnull
        final String servicePath,
        @Nonnull
        final String entityCollection, final String purchaseOrder, final String purchaseOrderItem) {
        super(servicePath, entityCollection);
        this.key.put("PurchaseOrder", purchaseOrder);
        this.key.put("PurchaseOrderItem", purchaseOrderItem);
    }

    @Override
    @Nonnull
    protected Class<PurchaseOrderItem> getEntityClass() {
        return PurchaseOrderItem.class;
    }

    @Override
    @Nonnull
    protected Map<String, Object> getKey() {
        return key;
    }

}
