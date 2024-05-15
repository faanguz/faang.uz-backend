export class BaseEntity<T> {
    protected data!: T & { id: string };

    constructor(data?: T) {
        Object.defineProperty(this, 'data', { value: data });
    }

    public get id(): string {
        return this.data.id.toString();
    }

    public set id(id: string) {
        this.data.id = id;
    }

    public toJSON(): T & { id: string } {
        const proto = Object.getPrototypeOf(this);
        const jsonObj: any = Object.assign({}, this);

        Object.entries(Object.getOwnPropertyDescriptors(proto))
            .filter(([, descriptor]) => typeof descriptor.get === 'function')
            .map(([key, descriptor]) => {
                if (descriptor && key[0] !== '_') {
                    jsonObj[key] = (this as any)[key];
                }
            });

        return { ...jsonObj, id: (this as any).id || undefined };
    }
}
