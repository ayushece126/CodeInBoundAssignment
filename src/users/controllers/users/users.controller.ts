import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Request,
  UseGuards
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { CreateUserPostDto } from '../../dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from '../../dtos/CreateUserProfile.dto';
import { UpdateUserDto } from '../../dtos/UpdateUser.dto';
import { UsersService } from '../../services/users/users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/SkipAuth';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Public()
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put()
  async updateUserById(
    @Request() req,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const userId = req.user.id;
    await this.userService.updateUser(userId, updateUserDto);
  }

  @Delete()
  async deleteUserById(@Request() req) {
    const userId = req.user.id;
    await this.userService.deleteUser(userId);
  }

  @Post('profile')
  createUserProfile(
    @Request() req,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    const userId = req.user.id;
    return this.userService.createUserProfile(userId, createUserProfileDto);
  }

  @Post('posts')
  createUserPost(
    @Request() req,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    const userId = req.user.id;
    return this.userService.createUserPost(userId, createUserPostDto);
  }
}