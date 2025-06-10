import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [];

    create(createUserInput: CreateUserInput): User {
        const newUser = { id: Date.now(), ...createUserInput };
        this.users.push(newUser);
        return newUser;
    }

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    findByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
} 