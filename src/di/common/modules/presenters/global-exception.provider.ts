import { Provider } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { GlobalExceptionFilter } from "components/errors";

export const GlobalExaptionFilterProviders: Provider[] = [
  {
    provide: APP_INTERCEPTOR,
    useClass: GlobalExceptionFilter,
  }
]