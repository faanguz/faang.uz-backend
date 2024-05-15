import { User } from 'domain/user/user';

import type { CreateUserParams } from 'domain/user/service/types';
import type { UserRepository } from 'domain/user/repository';

export interface UserService {
    createUser(params: CreateUserParams): Promise<User | null>;
    getUserByPhoneNumber(phoneNumber: string): Promise<User | null>;
}

export class UserServiceImpl implements UserService {
    constructor(private readonly userRepository: UserRepository) {}

    public async createUser(params: CreateUserParams): Promise<User | null> {
        const createdUserData = new User({
            first_name: params.first_name,
            last_name: params.last_name,
            phone_number: params.phone_number,
            last_login_at: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
        });

        return this.userRepository.createUser(createdUserData);
    }

    public async getUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
        return this.userRepository.getUserByPhoneNumber(phoneNumber);
    }
}
