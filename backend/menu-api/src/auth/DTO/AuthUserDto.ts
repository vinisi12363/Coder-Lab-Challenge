import { IsString, IsNotEmpty } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty({ message: 'username must not be empty' })
  @IsString({ message: 'username must be a string' })
  username: string;

  @IsNotEmpty({ message: 'password must not be empty' })
  @IsString({ message: 'password must be a string' })
  password: string;
}
