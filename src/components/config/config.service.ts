import convict, { type Path, type PathValue } from 'convict';
import dotenv from 'dotenv';

import type { Config, ConfigService } from 'components/config/config.types';
import { configSchema } from 'components/config/config.schema';

export class ConfigServiceImpl implements ConfigService {
    private config: convict.Config<Config>;

    constructor() {
        this.config = convict(configSchema);
        const dotEnvFile = dotenv.config().parsed;
        if (dotEnvFile) {
            this.config.load(dotenv.config().parsed);
        }
    }

    public get<T extends Path<Config>>(key: T): PathValue<Config, T> {
        return this.config.get<T>(key) as PathValue<Config, T>;
    }
}
