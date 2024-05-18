import type { Schema } from 'convict';
import type { Config } from 'components/config/config.types';
import { Environment } from 'components/config/config.types';

export const configSchema: Schema<Config> = {
    environment: {
        env: 'ENVIRONMENT',
        doc: 'Environment for axios requests',
        format: String,
        default: Environment.Test,
    },
    defaultLanguage: {
        env: 'DEFAULT_LANGUAGE',
        doc: 'Default language',
        format: String,
        default: 'en',
    },
    axios: {
        timeout: {
            env: 'AXIOS_TIMEOUT',
            doc: 'Timeout for axios requests',
            format: Number,
            default: 5000,
        },
        maxRedirects: {
            env: 'AXIOS_MAX_REDIRECTS',
            doc: 'Max redirects for axios requests',
            format: Number,
            default: 5,
        },
    },
    logger: {
        levels: {
            env: 'LOGGER_LEVELS',
            doc: 'Levels for logger',
            format: Array,
            default: ['info', 'error', 'warn'],
        },
        level: {
            env: 'LOGGER_LEVEL',
            doc: 'Level for logger',
            format: String,
            default: 'info',
        },
        prettyPrint: {
            env: 'LOGGER_PRETTY_PRINT',
            doc: 'Pretty print for logger',
            format: Boolean,
            default: false,
        },
    },
    jwt: {
        accessTokenSecret: {
            env: 'JWT_ACCESS_TOKEN_SECRET',
            doc: 'Secret for access token',
            format: String,
            default: 'access-token-secret',
        },
        accessTokenExpiration: {
            env: 'JWT_ACCESS_TOKEN_EXPIRATION',
            doc: 'Expiration for access token',
            format: String,
            default: '1h',
        },
        refreshTokenSecret: {
            env: 'JWT_REFRESH_TOKEN_SECRET',
            doc: 'Secret for refresh token',
            format: String,
            default: 'refresh-token-secret',
        },
        refreshTokenExpiration: {
            env: 'JWT_REFRESH_TOKEN_EXPIRATION',
            doc: 'Expiration for refresh token',
            format: String,
            default: '7d',
        },
    },
    db: {
        uri: {
            env: 'DB_URI',
            doc: 'URI for MongoDB',
            format: String,
            default: 'mongodb://localhost:27017',
        },
        name: {
            env: 'DB_NAME',
            doc: 'Name for MongoDB database',
            format: String,
            default: 'test',
        },
        auth: {
            enabled: {
                env: 'DB_AUTH_ENABLED',
                doc: 'Database auth enabled for authentication MongoDB database',
                format: Boolean,
                default: false,
            },
            username: {
                env: 'DB_AUTH_USERNAME',
                doc: 'Username for authentication MongoDB database',
                format: String,
                default: 'test',
            },
            password: {
                env: 'DB_AUTH_PASSWORD',
                doc: 'Password for authentication MongoDB database',
                format: String,
                default: 'test',
            },
            source: {
                env: 'DB_AUTH_SOURCE',
                doc: 'Source database for authentication MongoDB database',
                format: String,
                default: 'test',
            },
        },
    },
    server: {
        host: {
            env: 'SERVER_HOST',
            doc: 'Host for api-server',
            format: String,
            default: 'localhost',
        },
        port: {
            env: 'SERVER_PORT',
            doc: 'Port for api-server',
            format: Number,
            default: 3033,
        },
        name: {
            env: 'SERVER_NAME',
            doc: 'Name for server',
            format: String,
            default: 'api-server',
        },
        url: {
            env: 'SERVER_URL',
            doc: 'URL for api-server',
            format: String,
            default: 'http://localhost:3000',
        },
    },
    swagger: {
        title: {
            env: 'SWAGGER_TITLE',
            doc: 'Title for swagger',
            format: String,
            default: 'API',
        },
        description: {
            env: 'SWAGGER_DESCRIPTION',
            doc: 'Description for swagger',
            format: String,
            default: 'API documentation',
        },
        version: {
            env: 'SWAGGER_VERSION',
            doc: 'Version for swagger',
            format: String,
            default: '1.0.0',
        },
        url: {
            env: 'SWAGGER_URL',
            doc: 'URL for swagger',
            format: String,
            default: 'http://localhost:3000/api-docs',
        },
    },
};
