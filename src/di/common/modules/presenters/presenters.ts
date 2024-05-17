import type { Provider } from '@nestjs/common';

import { UserPresentersProvider } from 'di/common/modules/presenters/user.presenters';
import { GlobalExaptionFilterProviders } from './global-exception.provider';

export const PresentersProvider: Provider[] = [...UserPresentersProvider, ...GlobalExaptionFilterProviders];
