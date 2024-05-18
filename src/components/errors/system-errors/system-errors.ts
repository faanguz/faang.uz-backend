import { CustomError } from 'components/errors/custom-error';
import { SystemErrorCodes } from 'components/errors/system-errors/system-error-codes';
import { SystemErrorMessages } from 'components/errors/system-errors/system-error-messages';

export namespace SystemErrors {
    export class InternalServerError extends CustomError {
        constructor(data?: Record<string, unknown>) {
            const code = SystemErrorCodes.InternalServerError;
            const statusCode: number = 500;
            super(code, statusCode, SystemErrorMessages[code], data);
        }
    }

    export class BadRequest extends CustomError {
        constructor(data?: Record<string, unknown>) {
            const code = SystemErrorCodes.BadRequest;
            const statusCode: number = 400;
            super(code, statusCode, SystemErrorMessages[code], data);
        }
    }
}
