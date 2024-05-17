import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Symbols } from 'di/common';
import { CreateUserUseCase } from 'app/usecases/user';
import { CreateUserPayloadDto, CreateUserResponseDto } from 'controllers/user/dtos/create-user.dto';
import { CreateUserPresenter } from 'controllers/user/presenters';

@Controller('users')
export class UserController {
    constructor(
        @Inject(Symbols.usecases.user.createUser)
        private readonly createUserUseCase: CreateUserUseCase,
        @Inject(Symbols.presenters.user.createUser)
        private readonly createUserPresenter: CreateUserPresenter
    ) {}

    @Post('create')
    public async createUser(@Body() createUserDto: CreateUserPayloadDto): Promise<CreateUserResponseDto> {
        const result = await this.createUserUseCase.execute(createUserDto);
        return this.createUserPresenter.format(result);
    }
}
