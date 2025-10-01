/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.google.common.collect.Maps;
import com.sap.cloud.sdk.datamodel.odata.helper.FluentHelperByKey;
import com.sap.generated.namespaces.purchaseorder.selectable.PurchaseOrderItemNoteSelectable;

import javax.annotation.Nonnull;
import java.util.Map;


/**
 * Fluent helper to fetch a single {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity using key fields. This fluent helper allows methods which modify the underlying query to be called before executing the query itself.
 * 
 */
public class PurchaseOrderItemNoteByKeyFluentHelper
    extends FluentHelperByKey<PurchaseOrderItemNoteByKeyFluentHelper, PurchaseOrderItemNote, PurchaseOrderItemNoteSelectable>
{

    private final Map<String, Object> key = Maps.newLinkedHashMap();

    /**
     * Creates a fluent helper object that will fetch a single {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity with the provided key field values. To perform execution, call the {@link #executeRequest executeRequest} method on the fluent helper object.
     * 
     * @param entityCollection
     *     Entity Collection to be used to fetch a single {@code PurchaseOrderItemNote}
     * @param textObjectType
     *     Text ID<p>Constraints: Not nullable, Maximum length: 4</p>
     * @param servicePath
     *     Service path to be used to fetch a single {@code PurchaseOrderItemNote}
     * @param purchaseOrder
     *     Purchasing Document Number<p>Constraints: Not nullable, Maximum length: 10</p>
     * @param language
     *     Language Key<p>Constraints: Not nullable, Maximum length: 2</p>
     * @param purchaseOrderItem
     *     Item Number of Purchasing Document<p>Constraints: Not nullable, Maximum length: 5</p>
     */
    public PurchaseOrderItemNoteByKeyFluentHelper(
        @Nonnull
        final String servicePath,
        @Nonnull
        final String entityCollection, final String purchaseOrder, final String purchaseOrderItem, final String textObjectType, final String language) {
        super(servicePath, entityCollection);
        this.key.put("PurchaseOrder", purchaseOrder);
        this.key.put("PurchaseOrderItem", purchaseOrderItem);
        this.key.put("TextObjectType", textObjectType);
        this.key.put("Language", language);
    }

    @Override
    @Nonnull
    protected Class<PurchaseOrderItemNote> getEntityClass() {
        return PurchaseOrderItemNote.class;
    }

    @Override
    @Nonnull
    protected Map<String, Object> getKey() {
        return key;
    }

}
