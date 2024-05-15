import { Module } from '@nestjs/common';
import { AppModule } from 'app/services/api';
import { ApiInfrastructureModules } from './infrastructure';

@Module({
    imports: [...ApiInfrastructureModules, AppModule],
})
export class ContainerApi {}
