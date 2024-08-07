import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto';

@Controller('users')
export class UsersController {
  @Post('/signup')
  create(
    @Body()
    createUserDTO: CreateUserDTO,
  ) {
    // firstName, lastName, email, password, createdAt
    return createUserDTO;
  }
}
