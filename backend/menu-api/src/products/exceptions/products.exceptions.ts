import { HttpException, HttpStatus } from '@nestjs/common';

export class ConflictProductsException extends HttpException {
  constructor(name?: string) {
    const message = `This product: ${name} already exists in the database: `;
    super(message, HttpStatus.CONFLICT);
  }
}

export class ServerInputProductException extends HttpException {
  constructor() {
    const message = `Server error while inserting media data`;
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class NotFoundCategoryIdException extends HttpException {
  constructor() {
    const message = `There are id(s) that are not registered in the Categories`;
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class ProductNotFoundException extends HttpException {
  constructor() {
    const message = `Product not found in the database`;
    super(message, HttpStatus.NOT_FOUND);
  }
}
export class ProductIdNotFoundException extends HttpException {
  constructor(id: number) {
    const message = `Product with id:${id} not found in the database`;
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class CategoriesIdNotFoundException extends HttpException {
  constructor() {
    const message = `Categories not found in the database`;
    super(message, HttpStatus.NOT_FOUND);
  }
}
