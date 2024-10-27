import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { CreateUserPostDto } from '../../dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from '../../dtos/CreateUserProfile.dto';
import { UpdateUserDto } from '../../dtos/UpdateUser.dto';
import { UsersService } from '../../services/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../../../typeorm/entities/User").User[]>;
    createUser(createUserDto: CreateUserDto): Promise<import("../../../typeorm/entities/User").User>;
    updateUserById(req: any, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUserById(req: any): Promise<void>;
    createUserProfile(req: any, createUserProfileDto: CreateUserProfileDto): Promise<import("../../../typeorm/entities/User").User>;
    createUserPost(req: any, createUserPostDto: CreateUserPostDto): Promise<import("../../../typeorm/entities/Post").Post>;
}
