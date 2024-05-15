import type { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
import type { BaseEntity } from 'domain/_core';
import type { Repository } from 'data/mongo/repository';

export type EntityModel<T> = Model<T>;
export type EntityClass<T, E> = {
    new (data?: T): E;
};

export class MongooseRepository<T, E extends BaseEntity<T>> implements Repository<T, E> {
    protected readonly entity!: EntityClass<T, E>;
    protected readonly model!: EntityModel<T>;

    constructor(entityModel: EntityModel<T>, entityClass: EntityClass<T, E>) {
        this.model = entityModel;
        this.entity = entityClass;
    }

    public async create(entity: E): Promise<E | null> {
        const document = new this.model();
        if ((entity as any).data) {
            Object.assign(document, (entity as any).data);
        }
        return this.toEntity(document.save());
    }

    public async get(filter: FilterQuery<T>): Promise<E[]> {
        return this.toEntities(this.model.find(filter).exec());
    }

    public async getOne(filter: FilterQuery<T>): Promise<E | null> {
        return this.toEntity(this.model.findOne(filter).exec());
    }

    public async getOneAndUpdate(
        filter: FilterQuery<T>,
        update: UpdateQuery<T>,
        options: QueryOptions
    ): Promise<E | null> {
        return this.toEntity(this.model.findOneAndUpdate(filter, update, { ...options, ...{ new: true } }).exec());
    }

    private async toEntity(result: Promise<any | null>): Promise<E | null> {
        const document = await result;
        if (!document) return null;
        const entity = new this.entity();
        Object.defineProperty(entity, 'data', { enumerable: false, value: document });
        return entity;
    }

    private async toEntities(results: Promise<any[]>): Promise<E[]> {
        return (await results).map<E>((doc) => {
            const entity = new this.entity();
            Object.defineProperty(entity, 'data', { enumerable: false, value: doc });
            return entity;
        });
    }
}
