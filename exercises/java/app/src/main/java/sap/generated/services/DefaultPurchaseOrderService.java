/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.services;

import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemByKeyFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemCreateFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemDeleteFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNote;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNoteByKeyFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNoteCreateFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNoteDeleteFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNoteFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNoteUpdateFluentHelper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemUpdateFluentHelper;

import javax.annotation.Nonnull;


/**
 * <h3>Details:</h3><table summary='Details'><tr><td align='right'>OData Service:</td><td>API_PURCHASEORDER_PROCESS_SRV</td></tr></table>
 * 
 */
public class DefaultPurchaseOrderService
    implements PurchaseOrderService
{

    @Nonnull
    private final String servicePath;

    /**
     * Creates a service using {@link PurchaseOrderService#DEFAULT_SERVICE_PATH} to send the requests.
     * 
     */
    public DefaultPurchaseOrderService() {
        servicePath = PurchaseOrderService.DEFAULT_SERVICE_PATH;
    }

    /**
     * Creates a service using the provided service path to send the requests.
     * <p>
     * Used by the fluent {@link #withServicePath(String)} method.
     * 
     */
    private DefaultPurchaseOrderService(
        @Nonnull
        final String servicePath) {
        this.servicePath = servicePath;
    }

    @Override
    @Nonnull
    public DefaultPurchaseOrderService withServicePath(
        @Nonnull
        final String servicePath) {
        return new DefaultPurchaseOrderService(servicePath);
    }

  @Override
    @Nonnull
    public PurchaseOrderItemFluentHelper getAllPurchaseOrderItem() {
        return new PurchaseOrderItemFluentHelper(servicePath, "A_PurchaseOrderItem");
    }

    @Override
    @Nonnull
    public PurchaseOrderItemByKeyFluentHelper getPurchaseOrderItemByKey(final String purchaseOrder, final String purchaseOrderItem) {
        return new PurchaseOrderItemByKeyFluentHelper(servicePath, "A_PurchaseOrderItem", purchaseOrder, purchaseOrderItem);
    }

    @Override
    @Nonnull
    public PurchaseOrderItemCreateFluentHelper createPurchaseOrderItem(
        @Nonnull
        final PurchaseOrderItem purchaseOrderItem) {
        return new PurchaseOrderItemCreateFluentHelper(servicePath, purchaseOrderItem, "A_PurchaseOrderItem");
    }

    @Override
    @Nonnull
    public PurchaseOrderItemUpdateFluentHelper updatePurchaseOrderItem(
        @Nonnull
        final PurchaseOrderItem purchaseOrderItem) {
        return new PurchaseOrderItemUpdateFluentHelper(servicePath, purchaseOrderItem, "A_PurchaseOrderItem");
    }

    @Override
    @Nonnull
    public PurchaseOrderItemDeleteFluentHelper deletePurchaseOrderItem(
        @Nonnull
        final PurchaseOrderItem purchaseOrderItem) {
        return new PurchaseOrderItemDeleteFluentHelper(servicePath, purchaseOrderItem, "A_PurchaseOrderItem");
    }

    @Override
    @Nonnull
    public PurchaseOrderItemNoteFluentHelper getAllPurchaseOrderItemNote() {
        return new PurchaseOrderItemNoteFluentHelper(servicePath, "A_PurchaseOrderItemNote");
    }

    @Override
    @Nonnull
    public PurchaseOrderItemNoteByKeyFluentHelper getPurchaseOrderItemNoteByKey(final String purchaseOrder, final String purchaseOrderItem, final String textObjectType, final String language) {
        return new PurchaseOrderItemNoteByKeyFluentHelper(servicePath, "A_PurchaseOrderItemNote", purchaseOrder, purchaseOrderItem, textObjectType, language);
    }

    @Override
    @Nonnull
    public PurchaseOrderItemNoteCreateFluentHelper createPurchaseOrderItemNote(
        @Nonnull
        final PurchaseOrderItemNote purchaseOrderItemNote) {
        return new PurchaseOrderItemNoteCreateFluentHelper(servicePath, purchaseOrderItemNote, "A_PurchaseOrderItemNote");
    }

    @Override
    @Nonnull
    public PurchaseOrderItemNoteUpdateFluentHelper updatePurchaseOrderItemNote(
        @Nonnull
        final PurchaseOrderItemNote purchaseOrderItemNote) {
        return new PurchaseOrderItemNoteUpdateFluentHelper(servicePath, purchaseOrderItemNote, "A_PurchaseOrderItemNote");
    }

    @Override
    @Nonnull
    public PurchaseOrderItemNoteDeleteFluentHelper deletePurchaseOrderItemNote(
        @Nonnull
        final PurchaseOrderItemNote purchaseOrderItemNote) {
        return new PurchaseOrderItemNoteDeleteFluentHelper(servicePath, purchaseOrderItemNote, "A_PurchaseOrderItemNote");
    }
}
