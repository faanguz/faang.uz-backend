import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch } from '@nestjs/common';
import { ConfigService } from 'components/config';
import { Language } from 'domain/_core/multi-language';
import { CustomError } from 'components/errors/custom-error';

@Catch(Error)
export class ExceptionFilter extends BaseExceptionFilter implements ExceptionFilter {
    constructor(private readonly configService: ConfigService) {
        super();
    }

    public override async catch(exception: Error, host: ArgumentsHost): Promise<void> {
        const { headers } = host.switchToRpc().getData<{ headers: { 'x-accept-language': string } }>();

        const language: Language = this.getLanguage(headers['x-accept-language']);

        if (exception instanceof CustomError) {
            const response = host.switchToHttp().getResponse();

            const responseBody = {
                error_code: exception.code,
                message: exception.getMessage[language],
                data: exception.data,
                created_at: exception.createdAtISOString,
            };

            return response.status(exception.statusCode).json(responseBody);
        }

        // TODO: Implement other error handling
    }

    private getLanguage(language: string): Language {
        const defaultLanguage: string = this.configService.get('defaultLanguage');

        return Object.values(Language).includes(language as Language)
            ? (language as Language)
            : (defaultLanguage as Language);
    }
}
