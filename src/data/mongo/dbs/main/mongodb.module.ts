import { Module } from '@nestjs/common';
import { dbModuleProviders } from 'data/mongo/dbs/main';
import { ConfigModule } from 'di/common/modules/infrastructure/config';

@Module({
    imports: [ConfigModule],
    providers: [...dbModuleProviders],
    exports: [...dbModuleProviders],
})
export class MongodbModule {}
