import type { Path, PathValue } from 'convict';

export enum Environment {
    Test = 'test',
    Experimental = 'experimental',
    Production = 'experimental',
}

export interface Config {
    environment: Environment;
    axios: {
        timeout: number;
        maxRedirects: number;
    };
    logger: {
        levels: string[];
        level: string;
        prettyPrint: boolean;
    };
    jwt: {
        accessTokenSecret: string;
        accessTokenExpiration: string;
        refreshTokenSecret: string;
        refreshTokenExpiration: string;
    };
    db: {
        uri: string;
        name: string;
        auth: {
            enabled: boolean;
            username: string;
            password: string;
            source: string;
        };
    };
    server: {
        host: string;
        port: number;
        name: string;
        url: string;
    };
    swagger: {
        title: string;
        description: string;
        version: string;
        url: string;
    };
}

export interface ConfigService {
    get<T extends Path<Config>>(key: T): PathValue<Config, T>;
}
