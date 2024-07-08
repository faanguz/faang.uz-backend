import { JSONSchemaType } from 'ajv';
import { CreateUserType } from '../types/create-user.types';
import { BaseSchema } from './base-schema';

export const CreateUserSchema: JSONSchemaType<CreateUserType> = {
  type: 'object',
  properties: {
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    phone_number: { type: 'string' },
    last_login_at: { type: 'string', format: 'date-time', nullable: true },
  },
  required: ['first_name', 'last_name', 'phone_number'],
  additionalProperties: BaseSchema.additionalProperties,
};
