import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/DTO/createUserDto';

@Controller('auth/login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return await this.authService.signIn(
      createUserDto.name,
      createUserDto.password,
    );
  }
}
