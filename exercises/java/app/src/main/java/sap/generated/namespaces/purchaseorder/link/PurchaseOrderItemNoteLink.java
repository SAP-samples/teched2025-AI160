/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 */

package com.sap.generated.namespaces.purchaseorder.link;

import com.sap.cloud.sdk.datamodel.odata.helper.EntityLink;
import com.sap.cloud.sdk.datamodel.odata.helper.VdmObject;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNote;
import com.sap.generated.namespaces.purchaseorder.selectable.PurchaseOrderItemNoteSelectable;

import javax.annotation.Nonnull;


/**
 * Template class to represent entity navigation links of {@link PurchaseOrderItemNote PurchaseOrderItemNote} to other entities. Instances of this object are used in query modifier methods of the entity
 * fluent helpers. Contains methods to compare a field's value with a provided value.
 * 
 * Use the constants declared in each entity inner class. Instantiating directly requires knowing the underlying OData
 * field names, so use the constructor with caution.
 * 
 * @param <ObjectT>
 * Entity type of subclasses from {@link VdmObject VdmObject}.
 * 
 */
public class PurchaseOrderItemNoteLink<ObjectT extends VdmObject<?> >
    extends EntityLink<PurchaseOrderItemNoteLink<ObjectT> , PurchaseOrderItemNote, ObjectT>
    implements PurchaseOrderItemNoteSelectable
{


    /**
     * Use the constants declared in each entity inner class. Instantiating directly requires knowing the underlying OData field names, so use with caution.
     * 
     * @param fieldName
     *     OData navigation field name. Must match the field returned by the underlying OData service.
     */
    public PurchaseOrderItemNoteLink(final String fieldName) {
        super(fieldName);
    }

    private PurchaseOrderItemNoteLink(final EntityLink<PurchaseOrderItemNoteLink<ObjectT> , PurchaseOrderItemNote, ObjectT> toClone) {
        super(toClone);
    }

    @Nonnull
    @Override
    protected PurchaseOrderItemNoteLink<ObjectT> translateLinkType(final EntityLink<PurchaseOrderItemNoteLink<ObjectT> , PurchaseOrderItemNote, ObjectT> link) {
        return new PurchaseOrderItemNoteLink<ObjectT>(link);
    }

}
