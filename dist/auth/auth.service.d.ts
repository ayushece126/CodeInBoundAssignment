import { UsersService } from '../users/services/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(username: string, pass: string): Promise<{
        access_token: string;
    }>;
    signIn(username: string, pass: string): Promise<{
        access_token: string;
    }>;
}
