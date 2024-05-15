import { createConnection } from 'mongoose';
import { UserSchema } from 'data/mongo/schemas';
import { Symbols } from 'di/common';

import type { Provider } from '@nestjs/common';
import type { ConfigService } from 'components/config';
import type { Connection } from 'mongoose';

export const dbModuleProviders: Provider[] = [
    {
        provide: Symbols.infrastructure.db.mongodb.main,
        useFactory: (config: ConfigService): Connection => {
            let additionalConfigs = {};
            const dbAuthEnabled = config.get('db.auth.enabled');

            const dbUri = config.get('db.uri');
            const dbName = config.get('db.name');
            const dbUsername = config.get('db.auth.username');
            const dbPassword = config.get('db.auth.password');
            const dbAuthSource = config.get('db.auth.source');

            if (dbAuthEnabled) {
                additionalConfigs = {
                    user: dbUsername,
                    pass: dbPassword,
                    authSource: dbAuthSource,
                };
            }

            return createConnection(dbUri, {
                dbName: dbName,
                ...additionalConfigs,
            });
        },
        inject: [Symbols.infrastructure.common.config],
    },
    {
        provide: Symbols.domain.user.schema,
        useFactory: (connection: Connection): any =>
            connection.model(Symbols.domain.user.schema.toString(), UserSchema),
        inject: [Symbols.infrastructure.db.mongodb.main],
    },
];
