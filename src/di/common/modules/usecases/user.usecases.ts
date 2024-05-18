import type { Provider } from '@nestjs/common';

import { Symbols } from 'di/common';
import type { UserService } from 'domain/user';
import type { CreateUserUseCase } from 'app/usecases/user';
import { CreateUserUseCaseImpl } from 'app/usecases/user';

export const UserUseCasesProvider: Provider[] = [
    {
        provide: Symbols.usecases.user.createUser,
        useFactory: (userService: UserService): CreateUserUseCase => {
            return new CreateUserUseCaseImpl(userService);
        },
        inject: [Symbols.domain.user.service],
    },
];
