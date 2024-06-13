import { ZodTypeAny, z } from "zod";

function getSchemaType(schema: any): string {
    if (!schema.hasOwnProperty('type')) {
        if (Array.isArray(schema)) {
            return 'array';
        } else {
            return typeof schema;
        }
    }

    return schema.type;
}

export function convertJsonSchemaToZod(schema: any): ZodTypeAny {
    if (typeof schema !== 'object' || schema == null) {
        throw new Error('Invalid schema: must be a non-null object.');
    }

    const type = getSchemaType(schema);

    switch (type) {
        case "string":
            return z.string().nullable();
        case "number":
            return z.number().nullable();
        case "boolean":
            return z.boolean().nullable();
        case "array":
            if (!schema.items) {
                throw new Error('Invalid array schema: "items" property is required.');
            }
            return z.array(convertJsonSchemaToZod(schema.items)).nullable();
        case "object":
            const shape: Record<string, ZodTypeAny> = {};
            for (const key in schema) {
                if (key !== "type") {
                    shape[key] = convertJsonSchemaToZod(schema[key])
                }
            }
            return z.object(shape).nullable();
        default:
            throw new Error(`Unsupported schema type: ${type}`);
    }
}
