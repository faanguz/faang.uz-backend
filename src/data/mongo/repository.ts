import type { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import type { BaseEntity } from 'domain/_core';

export interface Repository<T, E extends BaseEntity<T>> {
    get(filter: FilterQuery<T>): Promise<E[]>;

    getOne(filter: FilterQuery<T>): Promise<E | null>;

    getOneAndUpdate(filter: FilterQuery<T>, update: UpdateQuery<T>, options: QueryOptions): Promise<E | null>;

    create(entity: E): Promise<E | null>;
}
