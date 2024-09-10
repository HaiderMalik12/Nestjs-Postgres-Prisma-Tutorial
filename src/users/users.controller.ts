import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto';
import { UsersService } from './users.service';
import { LoginDTO } from './login-dto';
import { AuthGuard } from './auth.guard';
import { Roles } from 'src/roles/role.decorator';
import { Role } from 'src/roles/roles.enum';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  async create(
    @Body()
    createUserDTO: CreateUserDTO,
  ) {
    return await this.userService.signup(createUserDTO);
  }

  @Post('/login')
  async login(
    @Body()
    loginDTO: LoginDTO,
  ) {
    return await this.userService.login(loginDTO);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Get('/profile')
  @Roles(Role.User)
  async getProfile(@Request() req) {
    return req.user;
  }
}
