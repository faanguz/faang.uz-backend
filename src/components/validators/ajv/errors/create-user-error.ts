import { ErrorObject } from 'ajv';

export class CreateUserError extends Error {
    public errors: ErrorObject[];

    constructor(errors: ErrorObject[]) {
        super('CreateUser validation error');
        this.errors = errors;
    }
}
