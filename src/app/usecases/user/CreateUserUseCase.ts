import type { UseCase } from 'components/interfaces';
import type { User, UserService } from 'domain/user';
import { UserErrors } from 'domain/user';

type Params = {
    first_name: string;
    last_name: string;
    phone_number: string;
};

type Result = User | null;

export interface CreateUserUseCase extends UseCase<Params, Result> {
    execute(params: Params): Promise<Result>;
}

export class CreateUserUseCaseImpl implements CreateUserUseCase {
    constructor(private readonly userService: UserService) {}

    public async execute(params: Params): Promise<Result> {
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
    }
}
