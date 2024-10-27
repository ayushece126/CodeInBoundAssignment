import { Repository } from 'typeorm';
import { Post } from '../../../typeorm/entities/Post';
import { Profile } from '../../../typeorm/entities/Profile';
import { User } from '../../../typeorm/entities/User';
import { CreateUserParams, CreateUserPostParams, CreateUserProfileParams, UpdateUserParams } from '../../../utils/types';
export declare class UsersService {
    private userRepository;
    private profileRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>, postRepository: Repository<Post>);
    findOne(username: string): Promise<User | undefined>;
    findUsers(): Promise<User[]>;
    createUser(userDetails: CreateUserParams): Promise<User>;
    updateUser(userId: number, updateUserDetails: UpdateUserParams): Promise<import("typeorm").UpdateResult>;
    deleteUser(userId: number): Promise<import("typeorm").DeleteResult>;
    createUserProfile(userId: number, createUserProfileDetails: CreateUserProfileParams): Promise<User>;
    createUserPost(userId: number, createUserPostDetails: CreateUserPostParams): Promise<Post>;
}
