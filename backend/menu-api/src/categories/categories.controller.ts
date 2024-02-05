import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Public } from 'src/auth/public-decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Public()
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }
}
