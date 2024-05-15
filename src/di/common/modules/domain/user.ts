import { Module } from '@nestjs/common';
import { Symbols } from '../../symbols';
import { UserModel, UserRepository, UserService, UserServiceImpl } from 'domain/user';
import { UserRepositoryImpl } from 'data/mongo/repositories';
import { EntityModel } from 'data/mongo/mongoose-repository';
import { MongodbModule } from 'data/mongo/dbs/main';

@Module({
    imports: [MongodbModule],
    providers: [
        {
            provide: Symbols.domain.user.repository,
            useFactory: function (userModel: EntityModel<UserModel>): UserRepository {
                return new UserRepositoryImpl(userModel);
            },
            inject: [Symbols.domain.user.schema],
        },
        {
            provide: Symbols.domain.user.service,
            useFactory: function (userRepository: UserRepository): UserService {
                return new UserServiceImpl(userRepository);
            },
            inject: [Symbols.domain.user.repository],
        },
    ],
    exports: [Symbols.domain.user.service, Symbols.domain.user.repository],
})
export class UserModule {}
