import type { UserModel } from 'domain/user/user';

export type CreateUserParams = Pick<UserModel, 'first_name' | 'last_name' | 'phone_number'>;
