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
public interface PurchaseOrderService
{

    /**
     * If no other path was provided via the {@link #withServicePath(String)} method, this is the default service path used to access the endpoint.
     * 
     */
    String DEFAULT_SERVICE_PATH = "/API_PURCHASEORDER_PROCESS_SRV";

    /**
     * Overrides the default service path and returns a new service instance with the specified service path. Also adjusts the respective entity URLs.
     * 
     * @param servicePath
     *     Service path that will override the default.
     * @return
     *     A new service instance with the specified service path.
     */
    @Nonnull
    PurchaseOrderService withServicePath(
        @Nonnull
        final String servicePath);

    /**
     * Fetch multiple {@link PurchaseOrderItem PurchaseOrderItem} entities.
     * 
     * @return
     *     A fluent helper to fetch multiple {@link PurchaseOrderItem PurchaseOrderItem} entities. This fluent helper allows methods which modify the underlying query to be called before executing the query itself. To perform execution, call the {@link PurchaseOrderItemFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemFluentHelper getAllPurchaseOrderItem();

    /**
     * Fetch a single {@link PurchaseOrderItem PurchaseOrderItem} entity using key fields.
     * 
     * @param purchaseOrder
     *     Purchase Order Number<p>Constraints: Not nullable, Maximum length: 10</p>
     * @param purchaseOrderItem
     *     Item Number of Purchase Order<p>Constraints: Not nullable, Maximum length: 5</p>
     * @return
     *     A fluent helper to fetch a single {@link PurchaseOrderItem PurchaseOrderItem} entity using key fields. This fluent helper allows methods which modify the underlying query to be called before executing the query itself. To perform execution, call the {@link PurchaseOrderItemByKeyFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemByKeyFluentHelper getPurchaseOrderItemByKey(final String purchaseOrder, final String purchaseOrderItem);

    /**
     * Create a new {@link PurchaseOrderItem PurchaseOrderItem} entity and save it to the S/4HANA system.
     *
     * @param purchaseOrderItem
     *     {@link PurchaseOrderItem PurchaseOrderItem} entity object that will be created in the S/4HANA system.
     * @return
     *     A fluent helper to create a new {@link PurchaseOrderItem PurchaseOrderItem} entity. To perform execution, call the {@link PurchaseOrderItemCreateFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemCreateFluentHelper createPurchaseOrderItem(
        @Nonnull
        final PurchaseOrderItem purchaseOrderItem);

    /**
     * Update an existing {@link PurchaseOrderItem PurchaseOrderItem} entity and save it to the S/4HANA system.
     * 
     * @param purchaseOrderItem
     *     {@link PurchaseOrderItem PurchaseOrderItem} entity object that will be updated in the S/4HANA system.
     * @return
     *     A fluent helper to update an existing {@link PurchaseOrderItem PurchaseOrderItem} entity. To perform execution, call the {@link PurchaseOrderItemUpdateFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemUpdateFluentHelper updatePurchaseOrderItem(
        @Nonnull
        final PurchaseOrderItem purchaseOrderItem);

    /**
     * Deletes an existing {@link PurchaseOrderItem PurchaseOrderItem} entity in the S/4HANA system.
     * 
     * @param purchaseOrderItem
     *     {@link PurchaseOrderItem PurchaseOrderItem} entity object that will be deleted in the S/4HANA system.
     * @return
     *     A fluent helper to delete an existing {@link PurchaseOrderItem PurchaseOrderItem} entity. To perform execution, call the {@link PurchaseOrderItemDeleteFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemDeleteFluentHelper deletePurchaseOrderItem(
        @Nonnull
        final PurchaseOrderItem purchaseOrderItem);

    /**
     * Fetch multiple {@link PurchaseOrderItemNote PurchaseOrderItemNote} entities.
     * 
     * @return
     *     A fluent helper to fetch multiple {@link PurchaseOrderItemNote PurchaseOrderItemNote} entities. This fluent helper allows methods which modify the underlying query to be called before executing the query itself. To perform execution, call the {@link PurchaseOrderItemNoteFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemNoteFluentHelper getAllPurchaseOrderItemNote();

    /**
     * Fetch a single {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity using key fields.
     * 
     * @param textObjectType
     *     Text ID<p>Constraints: Not nullable, Maximum length: 4</p>
     * @param purchaseOrder
     *     Purchasing Document Number<p>Constraints: Not nullable, Maximum length: 10</p>
     * @param language
     *     Language Key<p>Constraints: Not nullable, Maximum length: 2</p>
     * @param purchaseOrderItem
     *     Item Number of Purchasing Document<p>Constraints: Not nullable, Maximum length: 5</p>
     * @return
     *     A fluent helper to fetch a single {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity using key fields. This fluent helper allows methods which modify the underlying query to be called before executing the query itself. To perform execution, call the {@link PurchaseOrderItemNoteByKeyFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemNoteByKeyFluentHelper getPurchaseOrderItemNoteByKey(final String purchaseOrder, final String purchaseOrderItem, final String textObjectType, final String language);

    /**
     * Create a new {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity and save it to the S/4HANA system.
     * 
     * @param purchaseOrderItemNote
     *     {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity object that will be created in the S/4HANA system.
     * @return
     *     A fluent helper to create a new {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity. To perform execution, call the {@link PurchaseOrderItemNoteCreateFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemNoteCreateFluentHelper createPurchaseOrderItemNote(
        @Nonnull
        final PurchaseOrderItemNote purchaseOrderItemNote);

    /**
     * Update an existing {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity and save it to the S/4HANA system.
     * 
     * @param purchaseOrderItemNote
     *     {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity object that will be updated in the S/4HANA system.
     * @return
     *     A fluent helper to update an existing {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity. To perform execution, call the {@link PurchaseOrderItemNoteUpdateFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemNoteUpdateFluentHelper updatePurchaseOrderItemNote(
        @Nonnull
        final PurchaseOrderItemNote purchaseOrderItemNote);

    /**
     * Deletes an existing {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity in the S/4HANA system.
     * 
     * @param purchaseOrderItemNote
     *     {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity object that will be deleted in the S/4HANA system.
     * @return
     *     A fluent helper to delete an existing {@link PurchaseOrderItemNote PurchaseOrderItemNote} entity. To perform execution, call the {@link PurchaseOrderItemNoteDeleteFluentHelper#execute execute} method on the fluent helper object.
     */
    @Nonnull
    PurchaseOrderItemNoteDeleteFluentHelper deletePurchaseOrderItemNote(
        @Nonnull
        final PurchaseOrderItemNote purchaseOrderItemNote);
}
