import { JSONSchemaType } from 'ajv';

export const BaseSchema: JSONSchemaType<object> = {
    type: 'object',
    additionalProperties: false,
};
