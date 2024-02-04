import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }
}
