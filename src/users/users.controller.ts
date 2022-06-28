import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserrDto } from './dto/create-users-dto';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserrDto) {
    return this.usersService.create(createUserDto);
  }
}
