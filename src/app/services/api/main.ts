import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import { ContainerApi } from 'di/containers/api/container';
import type { ConfigService } from 'components/config';
import { Symbols } from 'di/common';
import { ExceptionFilter } from 'components/exceptions/exception.filter';
import { SuccessResponseInterceptor } from 'components/interceptors';

async function boostrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(ContainerApi);

    const config: ConfigService = app.get<ConfigService>(Symbols.infrastructure.common.config);

    app.useGlobalFilters(new ExceptionFilter(config));
    app.useGlobalInterceptors(new SuccessResponseInterceptor());

    await app.init();

    const server = config.get('server');

    await app.listen(server.port, server.host, async () => {
        console.log(`🚀 Server running on ${server.host}:${server.port}`);
    });
}

setImmediate(() => boostrap());
