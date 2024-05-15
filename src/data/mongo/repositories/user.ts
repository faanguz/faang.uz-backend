import type { EntityModel } from 'data/mongo/mongoose-repository';
import type { UserModel, UserRepository } from 'domain/user';

import { MongooseRepository } from 'data/mongo/mongoose-repository';
import { User } from 'domain/user';

export class UserRepositoryImpl extends MongooseRepository<UserModel, User> implements UserRepository {
    constructor(userModel: EntityModel<UserModel>) {
        super(userModel, User);
    }

    public async createUser(user: User): Promise<User | null> {
        return super.create(user);
    }

    public async getUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
        return super.getOne({
            phone_number: phoneNumber,
        });
    }
}
