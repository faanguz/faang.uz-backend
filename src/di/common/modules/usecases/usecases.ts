import type { Provider } from '@nestjs/common';

import { UserUseCasesProvider } from 'di/common/modules/usecases/user.usecases';

export const UseCasesProvider: Provider[] = [...UserUseCasesProvider];
