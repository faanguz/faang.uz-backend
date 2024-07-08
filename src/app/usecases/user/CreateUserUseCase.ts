import { HttpException, HttpStatus } from '@nestjs/common';
import type { UseCase } from 'components/interfaces';
import { CreateUserError } from 'components/validators/ajv/errors/create-user-error';
import { AjvValidatorService } from 'components/validators/ajv/service/ajv-validator-service';
import { CreateUserType } from 'components/validators/ajv/types/create-user.types';
import type { User, UserService } from 'domain/user';
import { UserErrors } from 'domain/user';

// type Params = {
//     first_name: string;
//     last_name: string;
//     phone_number: string;
// };
type Params = CreateUserType;
type Result = User | null;

export interface CreateUserUseCase extends UseCase<Params, Result> {
    execute(params: Params): Promise<Result>;
}

export class CreateUserUseCaseImpl implements CreateUserUseCase {
    private validator: AjvValidatorService;

    constructor(private readonly userService: UserService) {
        this.validator = new AjvValidatorService();
    }

    public async execute(params: Params): Promise<Result> {
        try {
            // Validate params
            this.validator.validateCreateUser(params);

            const user = await this.userService.getUserByPhoneNumber(params.phone_number);

            if (user) {
                throw new UserErrors.AlreadyExists({
                    phone_number: params.phone_number,
                });
            }

            return this.userService.createUser({
                first_name: params.first_name,
                last_name: params.last_name,
                phone_number: params.phone_number,
            });
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle CreateUserError
            if (error instanceof CreateUserError) {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: 'Validation error',
                        details: error.errors.map((e) => ({
                            field: e.instancePath.substring(1),
                            message: e.message,
                        })),
                    },
                    HttpStatus.BAD_REQUEST
                );
            }

            // Handle AlreadyExists error
            if (error instanceof UserErrors.AlreadyExists) {
                throw new HttpException(
                    {
                        status: HttpStatus.CONFLICT,
                        error: 'User already exists',
                        details: error.message,
                    },
                    HttpStatus.CONFLICT
                );
            }

            // Handle generic error
            if (error instanceof Error) {
                throw new HttpException(
                    {
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        error: 'Internal server error',
                        details: error.message,
                    },
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }

            // Handle unknown error
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Internal server error',
                    details: 'An unknown error occurred',
                },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
