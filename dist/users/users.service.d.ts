import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    create(createUserInput: CreateUserInput): User;
    findAll(): User[];
    findOne(id: number): User | undefined;
    findByEmail(email: string): User | undefined;
}
