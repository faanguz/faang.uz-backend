import type { CreateUserUseCase } from 'app/usecases/user';
import type { CreateUserResponseDto } from 'controllers/user/dtos/create-user.dto';
import type { Presenter } from 'components/interfaces';

type UseCaseResult = Awaited<ReturnType<CreateUserUseCase['execute']>>;

type Params = UseCaseResult;

type Response = CreateUserResponseDto;

export interface CreateUserPresenter extends Presenter<Params, Response> {
    format(params: Params): Response;
}

export class CreateUserPresenterImpl implements CreateUserPresenter {
    public format(params: Params): Response {
        if (!params) {
            return {
                user: null,
            };
        }

        return {
            user: {
                id: params.id,
                first_name: params.first_name,
                last_name: params.last_name,
                phone_number: params.phone_number,
            },
        };
    }
}
