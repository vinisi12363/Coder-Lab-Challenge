import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('jsonb')
  categories: number[];

  @Column('int')
  qty: number;

  @Column('int')
  price: number;

  @Column('text')
  photo: string;

  constructor(product: Partial<Product>) {
    Object.assign(this, product);
  }
}
