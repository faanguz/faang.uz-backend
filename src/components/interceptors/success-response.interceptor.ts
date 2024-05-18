import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class SuccessResponseInterceptor implements NestInterceptor {
    public intercept(
        _context: ExecutionContext,
        next: CallHandler
    ): Observable<{
        message: string;
        data: unknown;
        created_at: string;
    }> {
        return next.handle().pipe(
            map((data) => {
                return {
                    message: 'The request was completed successfully',
                    data: data,
                    created_at: new Date().toISOString(),
                };
            })
        );
    }
}
