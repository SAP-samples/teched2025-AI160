/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.collect.Maps;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.sap.cloud.sdk.cloudplatform.connectivity.Destination;
import com.sap.cloud.sdk.datamodel.odata.helper.VdmEntity;
import com.sap.cloud.sdk.s4hana.datamodel.odata.adapter.ODataField;
import com.sap.cloud.sdk.s4hana.datamodel.odata.annotation.Key;
import com.sap.cloud.sdk.typeconverter.TypeConverter;
import com.sap.generated.namespaces.purchaseorder.field.PurchaseOrderItemNoteField;
import com.sap.generated.namespaces.purchaseorder.selectable.PurchaseOrderItemNoteSelectable;
import com.sap.generated.services.PurchaseOrderService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import java.util.Map;


/**
 * Item Notes<p></p><p>Original entity name from the Odata EDM: <b>A_PurchaseOrderItemNoteType</b></p>
 * 
 */
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(doNotUseGetters = true, callSuper = true)
@EqualsAndHashCode(doNotUseGetters = true, callSuper = true)
@JsonAdapter(com.sap.cloud.sdk.s4hana.datamodel.odata.adapter.ODataVdmEntityAdapterFactory.class)
public class PurchaseOrderItemNote
    extends VdmEntity<PurchaseOrderItemNote>
{

    /**
     * Selector for all available fields of PurchaseOrderItemNote.
     * 
     */
    public final static PurchaseOrderItemNoteSelectable ALL_FIELDS = () -> "*";
    /**
     * (Key Field) Constraints: Not nullable, Maximum length: 10 <p>Original property name from the Odata EDM: <b>PurchaseOrder</b></p>
     * 
     * @return
     *     Purchasing Document Number
     */
    @Key
    @SerializedName("PurchaseOrder")
    @JsonProperty("PurchaseOrder")
    @Nullable
    @ODataField(odataName = "PurchaseOrder")
    private String purchaseOrder;
    /**
     * Use with available fluent helpers to apply the <b>PurchaseOrder</b> field to query operations.
     * 
     */
    public final static PurchaseOrderItemNoteField<String> PURCHASE_ORDER = new PurchaseOrderItemNoteField<String>("PurchaseOrder");
    /**
     * (Key Field) Constraints: Not nullable, Maximum length: 5 <p>Original property name from the Odata EDM: <b>PurchaseOrderItem</b></p>
     * 
     * @return
     *     Item Number of Purchasing Document
     */
    @Key
    @SerializedName("PurchaseOrderItem")
    @JsonProperty("PurchaseOrderItem")
    @Nullable
    @ODataField(odataName = "PurchaseOrderItem")
    private String purchaseOrderItem;
    /**
     * Use with available fluent helpers to apply the <b>PurchaseOrderItem</b> field to query operations.
     * 
     */
    public final static PurchaseOrderItemNoteField<String> PURCHASE_ORDER_ITEM = new PurchaseOrderItemNoteField<String>("PurchaseOrderItem");
    /**
     * Constraints: none<p>Original property name from the Odata EDM: <b>PlainLongText</b></p>
     * 
     * @return
     *     Long Text
     */
    @SerializedName("PlainLongText")
    @JsonProperty("PlainLongText")
    @Nullable
    @ODataField(odataName = "PlainLongText")
    private String plainLongText;
    /**
     * Use with available fluent helpers to apply the <b>PlainLongText</b> field to query operations.
     * 
     */
    public final static PurchaseOrderItemNoteField<String> PLAIN_LONG_TEXT = new PurchaseOrderItemNoteField<String>("PlainLongText");

    @Nonnull
    @Override
    public Class<PurchaseOrderItemNote> getType() {
        return PurchaseOrderItemNote.class;
    }

    /**
     * (Key Field) Constraints: Not nullable, Maximum length: 10 <p>Original property name from the Odata EDM: <b>PurchaseOrder</b></p>
     * 
     * @param purchaseOrder
     *     Purchasing Document Number
     */
    public void setPurchaseOrder(
        @Nullable
        final String purchaseOrder) {
        rememberChangedField("PurchaseOrder", this.purchaseOrder);
        this.purchaseOrder = purchaseOrder;
    }

    /**
     * (Key Field) Constraints: Not nullable, Maximum length: 5 <p>Original property name from the Odata EDM: <b>PurchaseOrderItem</b></p>
     * 
     * @param purchaseOrderItem
     *     Item Number of Purchasing Document
     */
    public void setPurchaseOrderItem(
        @Nullable
        final String purchaseOrderItem) {
        rememberChangedField("PurchaseOrderItem", this.purchaseOrderItem);
        this.purchaseOrderItem = purchaseOrderItem;
    }

    /**
     * Constraints: none<p>Original property name from the Odata EDM: <b>PlainLongText</b></p>
     * 
     * @param plainLongText
     *     Long Text
     */
    public void setPlainLongText(
        @Nullable
        final String plainLongText) {
        rememberChangedField("PlainLongText", this.plainLongText);
        this.plainLongText = plainLongText;
    }

    @Override
    protected String getEntityCollection() {
        return "A_PurchaseOrderItemNote";
    }

    @Nonnull
    @Override
    protected Map<String, Object> getKey() {
        final Map<String, Object> result = Maps.newLinkedHashMap();
        result.put("PurchaseOrder", getPurchaseOrder());
        result.put("PurchaseOrderItem", getPurchaseOrderItem());
        result.put("TextObjectType", "");
        result.put("Language", "");
        return result;
    }

    @Nonnull
    @Override
    protected Map<String, Object> toMapOfFields() {
        final Map<String, Object> cloudSdkValues = super.toMapOfFields();
        cloudSdkValues.put("PurchaseOrder", getPurchaseOrder());
        cloudSdkValues.put("PurchaseOrderItem", getPurchaseOrderItem());
        cloudSdkValues.put("TextObjectType", "");
        cloudSdkValues.put("Language", "");
        cloudSdkValues.put("PlainLongText", getPlainLongText());
        return cloudSdkValues;
    }

    @Override
    protected void fromMap(final Map<String, Object> inputValues) {
        final Map<String, Object> cloudSdkValues = Maps.newLinkedHashMap(inputValues);
        // simple properties
        {
            if (cloudSdkValues.containsKey("PurchaseOrder")) {
                final Object value = cloudSdkValues.remove("PurchaseOrder");
                if ((value == null)||(!value.equals(getPurchaseOrder()))) {
                    setPurchaseOrder(((String) value));
                }
            }
            if (cloudSdkValues.containsKey("PurchaseOrderItem")) {
                final Object value = cloudSdkValues.remove("PurchaseOrderItem");
                if ((value == null)||(!value.equals(getPurchaseOrderItem()))) {
                    setPurchaseOrderItem(((String) value));
                }
            }
            if (cloudSdkValues.containsKey("PlainLongText")) {
                final Object value = cloudSdkValues.remove("PlainLongText");
                if ((value == null)||(!value.equals(getPlainLongText()))) {
                    setPlainLongText(((String) value));
                }
            }
        }
        // structured properties
        {
        }
        // navigation properties
        {
        }
        super.fromMap(cloudSdkValues);
    }

    /**
     * Use with available fluent helpers to apply an extension field to query operations.
     * 
     * @param fieldName
     *     The name of the extension field as returned by the OData service.
     * @param <T>
     *     The type of the extension field when performing value comparisons.
     * @param fieldType
     *     The Java type to use for the extension field when performing value comparisons.
     * @return
     *     A representation of an extension field from this entity.
     */
    @Nonnull
    public static<T > PurchaseOrderItemNoteField<T> field(
        @Nonnull
        final String fieldName,
        @Nonnull
        final Class<T> fieldType) {
        return new PurchaseOrderItemNoteField<T>(fieldName);
    }

    /**
     * Use with available fluent helpers to apply an extension field to query operations.
     * 
     * @param typeConverter
     *     A TypeConverter<T, DomainT> instance whose first generic type matches the Java type of the field
     * @param fieldName
     *     The name of the extension field as returned by the OData service.
     * @param <T>
     *     The type of the extension field when performing value comparisons.
     * @param <DomainT>
     *     The type of the extension field as returned by the OData service.
     * @return
     *     A representation of an extension field from this entity, holding a reference to the given TypeConverter.
     */
    @Nonnull
    public static<T,DomainT > PurchaseOrderItemNoteField<T> field(
        @Nonnull
        final String fieldName,
        @Nonnull
        final TypeConverter<T, DomainT> typeConverter) {
        return new PurchaseOrderItemNoteField<T>(fieldName, typeConverter);
    }

    @Override
    @Nullable
    public Destination getDestinationForFetch() {
        return super.getDestinationForFetch();
    }

    @Override
    protected void setServicePathForFetch(
        @Nullable
        final String servicePathForFetch) {
        super.setServicePathForFetch(servicePathForFetch);
    }

    @Override
    public void attachToService(
        @Nullable
        final String servicePath,
        @Nonnull
        final Destination destination) {
        super.attachToService(servicePath, destination);
    }

    @Override
    protected String getDefaultServicePath() {
        return (PurchaseOrderService.DEFAULT_SERVICE_PATH);
    }

}
