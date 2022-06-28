import { Injectable } from '@nestjs/common';
import { CreateUserrDto } from './dto/create-users-dto';
import { User } from './entities/users.entities';
import { uuid } from 'uuidv4';

@Injectable()
export class UsersService {
  users: User[] = [];
  getAll() {
    return this.users;
  }

  create(createUserDto: CreateUserrDto): User {
    const newUser: User = { id: uuid(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
