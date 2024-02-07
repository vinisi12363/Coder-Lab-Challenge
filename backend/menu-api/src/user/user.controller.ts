import { Controller, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/createUserDto';
import { Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { Public } from 'src/auth/public-decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
  @Public()
  @Get()
  async getUserByUsername(@Param('username') username: string) {
    return await this.userService.findOneByUsername(username);
  }
}
