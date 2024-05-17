import { NestInterceptor, ExecutionContext, CallHandler, HttpException, InternalServerErrorException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Response } from 'express';
import { GlobalExaption } from 'components/interfaces';
import { HttpMessages } from 'components/constants';

export class GlobalExceptionFilter implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<GlobalExaption> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();

    return next.handle().pipe(
      tap((data: any) => {
        const result = this.responseWithBody({
          statusCode: response.statusCode,
          message: "The request was completed successfully", // static message
          data,
        });
        return response.json(result);
      }, (error) => {
        const result = this.responseWithoutBody(error);
        return response.json(result);
      })
    );
  }

  private responseWithBody(body: GlobalExaption): Required<GlobalExaption> {
    let { statusCode, message, data } = body;

    return {
      statusCode,
      message,
      data,
      created_at: new Date().toISOString(),
    };
  }

  private responseWithoutBody(exception: any): Required<GlobalExaption> {
    let statusCode: number;
    let message: string;

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      message = exception.message;
    } else if (exception instanceof InternalServerErrorException) {
      statusCode = exception.getStatus()
      message = exception.message;
    } else {
      statusCode = 400;
      message = HttpMessages.SomethingBadHappened;
    }

    return {
      statusCode,
      message,
      data: null,
      created_at: new Date().toISOString(),
    };
  }
}
