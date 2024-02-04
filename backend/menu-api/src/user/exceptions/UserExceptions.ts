import { HttpException, HttpStatus } from '@nestjs/common';

export class ConflictUserException extends HttpException {
  constructor(name?: string) {
    const message = `This user: ${name} already exists in the database: `;
    super(message, HttpStatus.CONFLICT);
  }
}

export class UnathorizedUserException extends HttpException {
  constructor() {
    const message = `Unauthorized user`;
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
