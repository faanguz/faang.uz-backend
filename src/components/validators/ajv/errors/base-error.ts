export class BaseError extends Error {
    public errors: unknown[];

    constructor(message: string, errors: unknown[] = []) {
        super(message);
        this.name = this.constructor.name;
        this.errors = errors;
    }
}
