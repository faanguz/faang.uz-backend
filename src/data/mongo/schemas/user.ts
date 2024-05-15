import { Schema } from 'mongoose';

import type { UserModel } from 'domain/user';

export const UserSchema = new Schema<UserModel>(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        last_login_at: {
            type: Date,
            required: false,
        },
    },
    {
        _id: true,
    }
);
