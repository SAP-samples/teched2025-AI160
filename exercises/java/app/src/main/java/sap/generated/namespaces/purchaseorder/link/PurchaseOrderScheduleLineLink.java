/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder.link;

import com.sap.cloud.sdk.datamodel.odata.helper.EntityLink;
import com.sap.cloud.sdk.datamodel.odata.helper.VdmObject;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderScheduleLine;
import com.sap.generated.namespaces.purchaseorder.selectable.PurchaseOrderScheduleLineSelectable;

import javax.annotation.Nonnull;


/**
 * Template class to represent entity navigation links of {@link PurchaseOrderScheduleLine PurchaseOrderScheduleLine} to other entities. Instances of this object are used in query modifier methods of the entity
 * fluent helpers. Contains methods to compare a field's value with a provided value.
 * 
 * Use the constants declared in each entity inner class. Instantiating directly requires knowing the underlying OData
 * field names, so use the constructor with caution.
 * 
 * @param <ObjectT>
 * Entity type of subclasses from {@link VdmObject VdmObject}.
 * 
 */
public class PurchaseOrderScheduleLineLink<ObjectT extends VdmObject<?> >
    extends EntityLink<PurchaseOrderScheduleLineLink<ObjectT> , PurchaseOrderScheduleLine, ObjectT>
    implements PurchaseOrderScheduleLineSelectable
{


    /**
     * Use the constants declared in each entity inner class. Instantiating directly requires knowing the underlying OData field names, so use with caution.
     * 
     * @param fieldName
     *     OData navigation field name. Must match the field returned by the underlying OData service.
     */
    public PurchaseOrderScheduleLineLink(final String fieldName) {
        super(fieldName);
    }

    private PurchaseOrderScheduleLineLink(final EntityLink<PurchaseOrderScheduleLineLink<ObjectT> , PurchaseOrderScheduleLine, ObjectT> toClone) {
        super(toClone);
    }

    @Nonnull
    @Override
    protected PurchaseOrderScheduleLineLink<ObjectT> translateLinkType(final EntityLink<PurchaseOrderScheduleLineLink<ObjectT> , PurchaseOrderScheduleLine, ObjectT> link) {
        return new PurchaseOrderScheduleLineLink<ObjectT>(link);
    }

}
