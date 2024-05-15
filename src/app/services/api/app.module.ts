import { Module } from '@nestjs/common';
import { UserModule } from 'di/common/modules/domain';
import { UserController } from 'controllers/user/user.controller';

import { PresentersProvider } from 'di/common/modules/presenters';
import { UseCasesProvider } from 'di/common/modules/usecases';

@Module({
    imports: [UserModule],
    controllers: [UserController],
    providers: [...UseCasesProvider, ...PresentersProvider],
})
export class AppModule {}
