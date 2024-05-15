import { ConfigModule } from 'di/common/modules/infrastructure';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ThrottlerModule } from '@nestjs/throttler';

export const ApiInfrastructureModules = [
    ConfigModule,
    MulterModule.register({
        storage: memoryStorage(),
    }),
    ThrottlerModule.forRoot(),
];
