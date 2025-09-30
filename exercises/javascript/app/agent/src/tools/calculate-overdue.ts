import { tool } from "@langchain/core/tools";
import * as z from 'zod/v4';

export const calculateOverdueTool = tool(
    async ({ sapTimestamp }) => {
        // Extract the number from SAP format /Date(1234567890123)/
        const match = sapTimestamp.match(/\/Date\((\d+)\)\//);
        if (!match) {
            throw new Error(`Invalid SAP timestamp format: ${sapTimestamp}`);
        }
        const sourceTimestamp = parseInt(match[1], 10);
        const diff = sourceTimestamp - Date.now();
        return diff;
    },
    {
        name: 'calculate_overdue',
        description: 'Calculate the overdue time in millisecond from a time in SAP timestamp format /Date(1234567890123)/ to current timestamp. If the result is positive, the date is not overdue; if negative, the date is in the past and overdue.',
        schema: z.object({
            sapTimestamp: z.string().meta({ description: 'SAP timestamp in format /Date(1234567890123)/' }).min(1)
        })
    }
);
