import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EntityManager } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly entityManager: EntityManager) {}

  async create(createProductDto: CreateProductDto) {
    const product = new Product(createProductDto);
    return await this.entityManager.save(product);
  }

  async findAll() {
    return await this.entityManager.find(Product);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = new Product(updateProductDto);
    await this.entityManager.update(Product, id, product);
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
