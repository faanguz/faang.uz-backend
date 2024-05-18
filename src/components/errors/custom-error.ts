import type { MultiLanguage } from 'domain/_core/multi-language';

export class CustomError extends Error {
    private readonly _code: number;
    private readonly _statusCode: number;
    private readonly _message: MultiLanguage;
    private readonly _data: Record<string, unknown>;
    private readonly _createdAt: Date;

    constructor(code: number, statusCode: number, message: MultiLanguage, data: Record<string, unknown> = {}) {
        super();

        this._code = code;
        this._statusCode = statusCode;
        this._message = message;
        this._data = data;
        this._createdAt = new Date();
    }

    public get code(): number {
        return this._code;
    }

    public get statusCode(): number {
        return this._statusCode;
    }

    public get getMessage(): MultiLanguage {
        return this._message;
    }

    public get data(): Record<string, unknown> {
        return this._data;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public get createdAtISOString(): string {
        return this._createdAt.toISOString();
    }
}
