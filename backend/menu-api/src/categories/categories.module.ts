import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { Category } from './entities/category.entity';
import { CategoryRepository } from './repository/category.repository'; // Certifique-se de que o caminho está correto
import { CategoryService } from './categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryRepository])], // Use forFeature para registrar entidades e repositórios
  controllers: [CategoriesController],
  providers: [CategoryService],
})
export class CategoriesModule {}
