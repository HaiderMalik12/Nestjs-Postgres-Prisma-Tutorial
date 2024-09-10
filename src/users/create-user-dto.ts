import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDTO {
  // firstname could be empty
  @IsOptional()
  @IsString()
  firstName: string;
  //   lastName could be empty
  @IsOptional()
  @IsString()
  lastName: string;
  //   Email format
  // should not be empty
  @IsEmail()
  @IsNotEmpty()
  email: string;
  //   password
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsBoolean()
  blocked: boolean;
  @IsEnum(Role)
  @IsOptional()
  role: Role;
}
