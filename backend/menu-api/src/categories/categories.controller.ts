import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
}
