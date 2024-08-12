import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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
}
