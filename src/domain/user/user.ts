import { BaseEntity } from 'domain/_core';

import type { BaseModel } from 'domain/_core';

export interface UserModel extends BaseModel {
    first_name: string;
    last_name: string;
    phone_number: string;
    last_login_at: Date;
    created_at: Date;
    updated_at: Date;
}

export class User extends BaseEntity<UserModel> {
    public get first_name(): string {
        return this.data.first_name;
    }

    public set first_name(first_name: string) {
        this.data.first_name = first_name;
    }

    public get last_name(): string {
        return this.data.last_name;
    }

    public set last_name(last_name: string) {
        this.data.last_name = last_name;
    }

    public get phone_number(): string {
        return this.data.phone_number;
    }

    public set phone_number(phone_number: string) {
        this.data.phone_number = phone_number;
    }

    public get last_login_at(): Date {
        return this.data.last_login_at;
    }

    public set last_login_at(last_login_at: Date) {
        this.data.last_login_at = last_login_at;
    }

    public get created_at(): Date {
        return this.data.created_at;
    }

    public set created_at(created_at: Date) {
        this.data.created_at = created_at;
    }

    public get updated_at(): Date {
        return this.data.updated_at;
    }

    public set updated_at(updated_at: Date) {
        this.data.updated_at = updated_at;
    }
}
