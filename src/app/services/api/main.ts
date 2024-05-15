import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { ContainerApi } from 'di/containers/api/container';
import type { ConfigService } from 'components/config';
import { Symbols } from 'di/common';
import * as console from 'console';

(async (): Promise<void> => {
    const app = await NestFactory.create(ContainerApi);

    const config = app.get<ConfigService>(Symbols.infrastructure.common.config);

    await app.init();

    const server = config.get('server');

    await app.listen(server.port, server.host, async () => {
        console.log(`🚀 Server running on ${server.host}:${server.port}`);
    });
})();
