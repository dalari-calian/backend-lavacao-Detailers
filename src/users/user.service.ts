import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {

    private readonly users: User[] = [];
    private currentId = 1;

    create(user: User) {
        user.id = this.currentId++;
        this.users.push(user);
    }
  
    findAll(): User[] {
        return this.users;
    }

    findOneById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}
