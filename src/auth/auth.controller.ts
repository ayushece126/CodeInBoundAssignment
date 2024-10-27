import { Controller, Post, Body, HttpCode, HttpStatus, Request, UseGuards, Get } from '@nestjs/common';
import { SignInDto } from './dtos/signIn.dto';
import { SignUpDto } from './dtos/signUp.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from 'src/SkipAuth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ access_token: string }> {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('signin')
  async signIn(@Body() signInDto: SignInDto): Promise<{ access_token: string }> {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}