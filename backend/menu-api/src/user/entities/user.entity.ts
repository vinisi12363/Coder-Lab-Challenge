import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: false })
  name: string;

  @Column({ length: 500, nullable: false })
  password: string;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
