import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  dbId!: number; 

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  attack!: number;

  @Column()
  defense!: number;

  @Column()
  hp!: number;

  @Column()
  speed!: number;

  @Column()
  imageUrl!: string;
}
