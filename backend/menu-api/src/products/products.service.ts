import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EntityManager } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as Error from './exceptions/products.exceptions';
import { Category } from 'src/categories/entities/category.entity';
import { In } from 'typeorm';
import { Transactional } from 'typeorm-transactional';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

    private readonly entityManager: EntityManager,
  ) {}

  @Transactional()
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product(createProductDto);
    await this.categoryIdsCheck(product.categories);
    await this.productNameCheck(product.name);
    return await this.entityManager.save(product);
  }

  categoryIdsCheck = async (categoryArray: number[]) => {
    const result = await this.categoryRepository.find({
      where: { id: In(categoryArray) },
    });
    console.log(categoryArray.length, result.length);
    if (result.length !== categoryArray.length) {
      throw new Error.CategoriesIdNotFoundException();
    }
  };

  async findAll(): Promise<Product[]> {
    const result = await this.productRepository.find();
    if (!result) {
      throw new Error.ProductNotFoundException();
    }
    return result;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    if (!product) {
      throw new Error.ProductIdNotFoundException(id);
    }
    return product;
  }

  async productNameCheck(name: string): Promise<void> {
    const product = await this.productRepository.findOne({
      where: { name },
    });
    if (product) {
      throw new Error.ConflictProductsException(name);
    }
  }

  @Transactional()
  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<object> {
    const updatedProduct = new Product(updateProductDto);
    const findProduct = await this.productRepository.findOne({ where: { id } });
    if (!findProduct) {
      throw new Error.ProductIdNotFoundException(id);
    }
    const result = await this.productRepository.update(id, updatedProduct);
    if (!result) {
      throw new Error.ServerInputProductException();
    }
    return result;
  }
  @Transactional()
  async remove(id: number): Promise<object> {
    const findProduct = await this.productRepository.findOne({ where: { id } });
    if (!findProduct) {
      throw new Error.ProductIdNotFoundException(id);
    }
    return await this.productRepository.delete(id);
  }
}
