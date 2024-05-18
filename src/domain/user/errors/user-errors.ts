import { CustomError } from 'components/errors/custom-error';
import { UserErrorCodes } from 'domain/user/errors/user-error-codes';
import { UserErrorMessages } from 'domain/user/errors/user-error-messages';

export namespace UserErrors {
    export class AlreadyExists extends CustomError {
        constructor(data?: Record<string, unknown>) {
            const code = UserErrorCodes.AlreadyExists;
            const statusCode: number = 400;
            super(code, statusCode, UserErrorMessages[code], data);
        }
    }

    export class NotFound extends CustomError {
        constructor(data?: Record<string, unknown>) {
            const code = UserErrorCodes.NotFound;
            const statusCode: number = 404;
            super(code, statusCode, UserErrorMessages[code], data);
        }
    }
}
