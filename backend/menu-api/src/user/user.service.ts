import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/createUserDto';
import * as Error from './exceptions/UserExceptions';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const result = await this.entityManager.transaction(
      async (entityManager) => {
        const newUser = new User(createUserDto);
        const userAlreadyExist = await this.findOneByUsername(newUser.username);
        if (userAlreadyExist) {
          throw new Error.ConflictUserException(newUser.username);
        }
        return await entityManager.save(newUser);
      },
    );

    return result;
  }
  async findOneByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });
    return user;
  }
}
