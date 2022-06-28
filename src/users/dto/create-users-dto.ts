import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserrDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
