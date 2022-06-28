import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserrDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User Name',
    example: 'Maycon',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User E-mail',
    example: 'maycomorais@email.com',
  })
  email: string;
}
