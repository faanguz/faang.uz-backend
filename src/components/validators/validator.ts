import { AjvValidatorService } from './ajv/service/ajv-validator-service';
import { CreateUserType } from './ajv/types/create-user.types';

export class Validator {
    private ajvValidatorService: AjvValidatorService;

    constructor() {
        this.ajvValidatorService = new AjvValidatorService();
    }

    validateCreateUser(data: CreateUserType): void {
        this.ajvValidatorService.validateCreateUser(data);
    }
}
