export const Symbols = {
    infrastructure: {
        common: {
            config: Symbol('infrastructure.common.config'),
            logger: Symbol('infrastructure.common.logger'),
            customDate: Symbol('infrastructure.common.customDate'),
        },
        db: {
            mongodb: {
                main: Symbol('infrastructure.db.mongodb.main'),
            },
        },
    },
    domain: {
        user: {
            repository: Symbol('domain.user.repository'),
            service: Symbol('domain.user.service'),
            schema: Symbol('domain.user.schema'),
        },
    },
    usecases: {
        user: {
            createUser: Symbol('usecases.user.createUser'),
        },
    },
    presenters: {
        user: {
            createUser: Symbol('presenters.user.createUser'),
        },
    },
};
