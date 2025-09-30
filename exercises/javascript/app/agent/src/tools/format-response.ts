import { tool } from "@langchain/core/tools";
import * as z from 'zod/v4';

export const formatPurchaseOrdersTool = tool(
    () => {},
    {
        name: 'format_response_purchase_orders',
        description: 'Format text to an array of purchase order items in JSON format',
        schema: z.object({
            'data': z.array(
                z.object(
                    {
                        'PurchaseOrder': z.string().meta({ description: 'The purchase order number' }),
                        'PurchaseOrderItem': z.string().meta({ description: 'The purchase order item number' }),
                        'Plant': z.string().meta({ description: 'The plant code' }),
                        'OrderQuantity': z.number().meta({ description: 'The order quantity' }),
                        'PurchaseOrderQuantityUnit': z.string().meta({ description: 'The unit of measure for the order quantity' }),
                        'DeliveryAddressName': z.string().meta({ description: 'The name of the delivery address' }),
                        'DeliveryAddressCityName': z.string().meta({ description: 'The city name of the delivery address' }),
                        'DeliveryAddressCountry': z.string().meta({ description: 'The country of the delivery address' }),
                        'ScheduleLineDeliveryDate': z.number().meta({ description: 'The schedule line delivery date in millisecond timestamp without SAP specific /Date(...) format' }),
                        'OverdueTime': z.number().meta({ description: 'Delivery overdue time in millisecond' }),
                        'ExistingNote': z.string().meta({ description: 'Any existing note for the purchase order item' }).optional(),
                        'DraftEmail': z.string().meta({ description: 'The drafted escalation email content' })
                    }
                )
            )
        })
    }
);
