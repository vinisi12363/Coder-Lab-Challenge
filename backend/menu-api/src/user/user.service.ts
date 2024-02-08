import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/createUserDto';
import * as Error from './exceptions/UserExceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Transactional } from 'typeorm-transactional';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  @Transactional()
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User(createUserDto);
    const result = await this.findOneByUsername(newUser.username);
    if (result) {
      throw new Error.ConflictUserException(newUser.username);
    }
    return await this.entityManager.save(newUser);
  }
  async findOneByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });
    return user;
  }
}
