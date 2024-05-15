import type { Provider } from '@nestjs/common';
import { Symbols } from 'di/common';
import type { CreateUserPresenter } from 'controllers/user/presenters';
import { CreateUserPresenterImpl } from 'controllers/user/presenters';

export const UserPresentersProvider: Provider[] = [
    {
        provide: Symbols.presenters.user.createUser,
        useFactory: (): CreateUserPresenter => {
            return new CreateUserPresenterImpl();
        },
    },
];
