import Ajv, { ValidateFunction, ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { CreateUserError } from '../errors/create-user-error';
import { CreateUserSchema } from '../schemas/create-user-schema';
import { CreateUserType } from '../types/create-user.types';

export class AjvValidatorService {
  private ajv: Ajv;
  private createUserValidator: ValidateFunction<CreateUserType>;

  constructor() {
    this.ajv = new Ajv({ allErrors: true, useDefaults: true });
    addFormats(this.ajv); // Add this line to include ajv-formats
    this.createUserValidator = this.ajv.compile(CreateUserSchema);
  }

  validateCreateUser(data: CreateUserType): void {
    const valid = this.createUserValidator(data);
    if (!valid) {
      console.error('Validation errors:', this.createUserValidator.errors); // Add this line to log errors
      throw new CreateUserError(this.createUserValidator.errors as ErrorObject[]);
    }
  }
}
