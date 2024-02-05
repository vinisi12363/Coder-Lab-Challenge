import {
  IsInt,
  IsNumber,
  IsString,
  ArrayNotEmpty,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Name must not be empty' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ArrayNotEmpty({ message: 'Categories must not be empty' })
  @IsInt({ each: true, message: 'Categories must be an array of integers' })
  categories: number[];

  @IsNotEmpty({ message: 'qty must not be empty' })
  @IsNumber()
  @IsPositive({ message: 'qty must be a positive number' })
  qty: number;

  @IsNotEmpty({ message: 'price must not be empty' })
  @IsNumber()
  @IsPositive({ message: 'price must be a positive number' })
  price: number;

  @IsNotEmpty({ message: 'photo must not be empty' })
  @IsUrl()
  photo: string;
}
