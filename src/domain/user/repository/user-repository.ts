import type { User } from 'domain/user/user';

export interface UserRepository {
    createUser(user: User): Promise<User | null>;

    getUserByPhoneNumber(phoneNumber: string): Promise<User | null>;
}
