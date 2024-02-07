import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && user.password === password) {
      const payload = { name: user.name, sub: user.id };
      const data = {
        id: user.id,
        username: user.username,
        name: user.name,
        access_token: await this.jwtService.signAsync(payload),
      };
      return data;
    }
    throw new HttpException(
      'user Not Found or incorrect password',
      HttpStatus.BAD_REQUEST,
    );
  }
}
