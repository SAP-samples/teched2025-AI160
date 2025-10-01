/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder.selectable;

import com.sap.cloud.sdk.datamodel.odata.helper.EntitySelectable;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.field.PurchaseOrderItemField;
import com.sap.generated.namespaces.purchaseorder.link.PurchaseOrderItemLink;


/**
 * Interface to enable OData entity selectors for {@link PurchaseOrderItem PurchaseOrderItem}. This interface is used by {@link PurchaseOrderItemField PurchaseOrderItemField} and {@link PurchaseOrderItemLink PurchaseOrderItemLink}.
 * 
 * <p>Available instances:
 * <ul>
 * <li>{@link PurchaseOrderItem#PURCHASE_ORDER PURCHASE_ORDER}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_ORDER_ITEM PURCHASE_ORDER_ITEM}</li>
 * <li>{@link PurchaseOrderItem#PURCHASING_DOCUMENT_DELETION_CODE PURCHASING_DOCUMENT_DELETION_CODE}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_ORDER_ITEM_TEXT PURCHASE_ORDER_ITEM_TEXT}</li>
 * <li>{@link PurchaseOrderItem#PLANT PLANT}</li>
 * <li>{@link PurchaseOrderItem#STORAGE_LOCATION STORAGE_LOCATION}</li>
 * <li>{@link PurchaseOrderItem#MATERIAL_GROUP MATERIAL_GROUP}</li>
 * <li>{@link PurchaseOrderItem#PURCHASING_INFO_RECORD PURCHASING_INFO_RECORD}</li>
 * <li>{@link PurchaseOrderItem#SUPPLIER_MATERIAL_NUMBER SUPPLIER_MATERIAL_NUMBER}</li>
 * <li>{@link PurchaseOrderItem#ORDER_QUANTITY ORDER_QUANTITY}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_ORDER_QUANTITY_UNIT PURCHASE_ORDER_QUANTITY_UNIT}</li>
 * <li>{@link PurchaseOrderItem#ORDER_PRICE_UNIT ORDER_PRICE_UNIT}</li>
 * <li>{@link PurchaseOrderItem#ORDER_PRICE_UNIT_TO_ORDER_UNIT_NMRTR ORDER_PRICE_UNIT_TO_ORDER_UNIT_NMRTR}</li>
 * <li>{@link PurchaseOrderItem#ORD_PRICE_UNIT_TO_ORDER_UNIT_DNMNTR ORD_PRICE_UNIT_TO_ORDER_UNIT_DNMNTR}</li>
 * <li>{@link PurchaseOrderItem#DOCUMENT_CURRENCY DOCUMENT_CURRENCY}</li>
 * <li>{@link PurchaseOrderItem#NET_PRICE_AMOUNT NET_PRICE_AMOUNT}</li>
 * <li>{@link PurchaseOrderItem#NET_PRICE_QUANTITY NET_PRICE_QUANTITY}</li>
 * <li>{@link PurchaseOrderItem#TAX_CODE TAX_CODE}</li>
 * <li>{@link PurchaseOrderItem#SHIPPING_INSTRUCTION SHIPPING_INSTRUCTION}</li>
 * <li>{@link PurchaseOrderItem#TAX_DETERMINATION_DATE TAX_DETERMINATION_DATE}</li>
 * <li>{@link PurchaseOrderItem#TAX_COUNTRY TAX_COUNTRY}</li>
 * <li>{@link PurchaseOrderItem#PRICE_IS_TO_BE_PRINTED PRICE_IS_TO_BE_PRINTED}</li>
 * <li>{@link PurchaseOrderItem#OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT}</li>
 * <li>{@link PurchaseOrderItem#UNLIMITED_OVERDELIVERY_IS_ALLOWED UNLIMITED_OVERDELIVERY_IS_ALLOWED}</li>
 * <li>{@link PurchaseOrderItem#UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT}</li>
 * <li>{@link PurchaseOrderItem#VALUATION_TYPE VALUATION_TYPE}</li>
 * <li>{@link PurchaseOrderItem#IS_COMPLETELY_DELIVERED IS_COMPLETELY_DELIVERED}</li>
 * <li>{@link PurchaseOrderItem#IS_FINALLY_INVOICED IS_FINALLY_INVOICED}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_ORDER_ITEM_CATEGORY PURCHASE_ORDER_ITEM_CATEGORY}</li>
 * <li>{@link PurchaseOrderItem#ACCOUNT_ASSIGNMENT_CATEGORY ACCOUNT_ASSIGNMENT_CATEGORY}</li>
 * <li>{@link PurchaseOrderItem#MULTIPLE_ACCT_ASSGMT_DISTRIBUTION MULTIPLE_ACCT_ASSGMT_DISTRIBUTION}</li>
 * <li>{@link PurchaseOrderItem#PARTIAL_INVOICE_DISTRIBUTION PARTIAL_INVOICE_DISTRIBUTION}</li>
 * <li>{@link PurchaseOrderItem#GOODS_RECEIPT_IS_EXPECTED GOODS_RECEIPT_IS_EXPECTED}</li>
 * <li>{@link PurchaseOrderItem#GOODS_RECEIPT_IS_NON_VALUATED GOODS_RECEIPT_IS_NON_VALUATED}</li>
 * <li>{@link PurchaseOrderItem#INVOICE_IS_EXPECTED INVOICE_IS_EXPECTED}</li>
 * <li>{@link PurchaseOrderItem#INVOICE_IS_GOODS_RECEIPT_BASED INVOICE_IS_GOODS_RECEIPT_BASED}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_CONTRACT PURCHASE_CONTRACT}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_CONTRACT_ITEM PURCHASE_CONTRACT_ITEM}</li>
 * <li>{@link PurchaseOrderItem#CUSTOMER CUSTOMER}</li>
 * <li>{@link PurchaseOrderItem#SUBCONTRACTOR SUBCONTRACTOR}</li>
 * <li>{@link PurchaseOrderItem#SUPPLIER_IS_SUBCONTRACTOR SUPPLIER_IS_SUBCONTRACTOR}</li>
 * <li>{@link PurchaseOrderItem#ITEM_NET_WEIGHT ITEM_NET_WEIGHT}</li>
 * <li>{@link PurchaseOrderItem#ITEM_WEIGHT_UNIT ITEM_WEIGHT_UNIT}</li>
 * <li>{@link PurchaseOrderItem#TAX_JURISDICTION TAX_JURISDICTION}</li>
 * <li>{@link PurchaseOrderItem#PRICING_DATE_CONTROL PRICING_DATE_CONTROL}</li>
 * <li>{@link PurchaseOrderItem#ITEM_VOLUME ITEM_VOLUME}</li>
 * <li>{@link PurchaseOrderItem#ITEM_VOLUME_UNIT ITEM_VOLUME_UNIT}</li>
 * <li>{@link PurchaseOrderItem#SUPPLIER_CONFIRMATION_CONTROL_KEY SUPPLIER_CONFIRMATION_CONTROL_KEY}</li>
 * <li>{@link PurchaseOrderItem#INCOTERMS_CLASSIFICATION INCOTERMS_CLASSIFICATION}</li>
 * <li>{@link PurchaseOrderItem#INCOTERMS_TRANSFER_LOCATION INCOTERMS_TRANSFER_LOCATION}</li>
 * <li>{@link PurchaseOrderItem#EVALD_RCPT_SETTLMT_IS_ALLOWED EVALD_RCPT_SETTLMT_IS_ALLOWED}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_REQUISITION PURCHASE_REQUISITION}</li>
 * <li>{@link PurchaseOrderItem#PURCHASE_REQUISITION_ITEM PURCHASE_REQUISITION_ITEM}</li>
 * <li>{@link PurchaseOrderItem#IS_RETURNS_ITEM IS_RETURNS_ITEM}</li>
 * <li>{@link PurchaseOrderItem#REQUISITIONER_NAME REQUISITIONER_NAME}</li>
 * <li>{@link PurchaseOrderItem#SERVICE_PACKAGE SERVICE_PACKAGE}</li>
 * <li>{@link PurchaseOrderItem#EARMARKED_FUNDS EARMARKED_FUNDS}</li>
 * <li>{@link PurchaseOrderItem#EARMARKED_FUNDS_DOCUMENT EARMARKED_FUNDS_DOCUMENT}</li>
 * <li>{@link PurchaseOrderItem#EARMARKED_FUNDS_ITEM EARMARKED_FUNDS_ITEM}</li>
 * <li>{@link PurchaseOrderItem#EARMARKED_FUNDS_DOCUMENT_ITEM EARMARKED_FUNDS_DOCUMENT_ITEM}</li>
 * <li>{@link PurchaseOrderItem#INCOTERMS_LOCATION1 INCOTERMS_LOCATION1}</li>
 * <li>{@link PurchaseOrderItem#INCOTERMS_LOCATION2 INCOTERMS_LOCATION2}</li>
 * <li>{@link PurchaseOrderItem#MATERIAL MATERIAL}</li>
 * <li>{@link PurchaseOrderItem#INTERNATIONAL_ARTICLE_NUMBER INTERNATIONAL_ARTICLE_NUMBER}</li>
 * <li>{@link PurchaseOrderItem#MANUFACTURER_MATERIAL MANUFACTURER_MATERIAL}</li>
 * <li>{@link PurchaseOrderItem#SERVICE_PERFORMER SERVICE_PERFORMER}</li>
 * <li>{@link PurchaseOrderItem#PRODUCT_TYPE PRODUCT_TYPE}</li>
 * <li>{@link PurchaseOrderItem#EXPECTED_OVERALL_LIMIT_AMOUNT EXPECTED_OVERALL_LIMIT_AMOUNT}</li>
 * <li>{@link PurchaseOrderItem#OVERALL_LIMIT_AMOUNT OVERALL_LIMIT_AMOUNT}</li>
 * <li>{@link PurchaseOrderItem#PUR_CONTRACT_FOR_OVERALL_LIMIT PUR_CONTRACT_FOR_OVERALL_LIMIT}</li>
 * <li>{@link PurchaseOrderItem#PURCHASING_PARENT_ITEM PURCHASING_PARENT_ITEM}</li>
 * <li>{@link PurchaseOrderItem#BATCH BATCH}</li>
 * <li>{@link PurchaseOrderItem#PURCHASING_ITEM_IS_FREE_OF_CHARGE PURCHASING_ITEM_IS_FREE_OF_CHARGE}</li>
 * <li>{@link PurchaseOrderItem#REFERENCE_DELIVERY_ADDRESS_ID REFERENCE_DELIVERY_ADDRESS_ID}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_ID DELIVERY_ADDRESS_ID}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_NAME DELIVERY_ADDRESS_NAME}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_NAME2 DELIVERY_ADDRESS_NAME2}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_FULL_NAME DELIVERY_ADDRESS_FULL_NAME}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_STREET_NAME DELIVERY_ADDRESS_STREET_NAME}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_HOUSE_NUMBER DELIVERY_ADDRESS_HOUSE_NUMBER}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_CITY_NAME DELIVERY_ADDRESS_CITY_NAME}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_POSTAL_CODE DELIVERY_ADDRESS_POSTAL_CODE}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_REGION DELIVERY_ADDRESS_REGION}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_COUNTRY DELIVERY_ADDRESS_COUNTRY}</li>
 * <li>{@link PurchaseOrderItem#DELIVERY_ADDRESS_DISTRICT_NAME DELIVERY_ADDRESS_DISTRICT_NAME}</li>
 * <li>{@link PurchaseOrderItem#DOWN_PAYMENT_TYPE DOWN_PAYMENT_TYPE}</li>
 * <li>{@link PurchaseOrderItem#DOWN_PAYMENT_PERCENTAGE_OF_TOT_AMT DOWN_PAYMENT_PERCENTAGE_OF_TOT_AMT}</li>
 * <li>{@link PurchaseOrderItem#DOWN_PAYMENT_AMOUNT DOWN_PAYMENT_AMOUNT}</li>
 * <li>{@link PurchaseOrderItem#DOWN_PAYMENT_DUE_DATE DOWN_PAYMENT_DUE_DATE}</li>
 * <li>{@link PurchaseOrderItem#BR_MATERIAL_USAGE BR_MATERIAL_USAGE}</li>
 * <li>{@link PurchaseOrderItem#BR_MATERIAL_ORIGIN BR_MATERIAL_ORIGIN}</li>
 * <li>{@link PurchaseOrderItem#BRCFOP_CATEGORY BRCFOP_CATEGORY}</li>
 * <li>{@link PurchaseOrderItem#BR_IS_PRODUCED_IN_HOUSE BR_IS_PRODUCED_IN_HOUSE}</li>
 * <li>{@link PurchaseOrderItem#CONSUMPTION_TAX_CTRL_CODE CONSUMPTION_TAX_CTRL_CODE}</li>
 * <li>{@link PurchaseOrderItem#PURG_PROD_CMPLNC_SUPPLIER_STATUS PURG_PROD_CMPLNC_SUPPLIER_STATUS}</li>
 * <li>{@link PurchaseOrderItem#PURG_PRODUCT_MARKETABILITY_STATUS PURG_PRODUCT_MARKETABILITY_STATUS}</li>
 * <li>{@link PurchaseOrderItem#PURG_SAFETY_DATA_SHEET_STATUS PURG_SAFETY_DATA_SHEET_STATUS}</li>
 * <li>{@link PurchaseOrderItem#PURG_PROD_CMPLNC_DNGRS_GOODS_STATUS PURG_PROD_CMPLNC_DNGRS_GOODS_STATUS}</li>
 * <li>{@link PurchaseOrderItem#TO_PURCHASE_ORDER TO_PURCHASE_ORDER}</li>
 * <li>{@link PurchaseOrderItem#TO_ACCOUNT_ASSIGNMENT TO_ACCOUNT_ASSIGNMENT}</li>
 * <li>{@link PurchaseOrderItem#TO_PURCHASE_ORDER_ITEM_NOTE TO_PURCHASE_ORDER_ITEM_NOTE}</li>
 * <li>{@link PurchaseOrderItem#TO_PURCHASE_ORDER_PRICING_ELEMENT TO_PURCHASE_ORDER_PRICING_ELEMENT}</li>
 * <li>{@link PurchaseOrderItem#TO_SCHEDULE_LINE TO_SCHEDULE_LINE}</li>
 * </ul>
 * 
 */
public interface PurchaseOrderItemSelectable
    extends EntitySelectable<PurchaseOrderItem>
{


}
