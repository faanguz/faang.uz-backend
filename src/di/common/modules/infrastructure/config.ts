import { Module } from '@nestjs/common';
import { Symbols } from 'di/common';
import { ConfigService, ConfigServiceImpl } from 'components/config';

@Module({
    imports: [],
    providers: [
        {
            provide: Symbols.infrastructure.common.config,
            useFactory: function (): ConfigService {
                return new ConfigServiceImpl();
            },
            inject: [],
        },
    ],
    exports: [Symbols.infrastructure.common.config],
})
export class ConfigModule {}
