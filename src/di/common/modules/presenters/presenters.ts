import type { Provider } from '@nestjs/common';

import { UserPresentersProvider } from 'di/common/modules/presenters/user.presenters';

export const PresentersProvider: Provider[] = [...UserPresentersProvider];
