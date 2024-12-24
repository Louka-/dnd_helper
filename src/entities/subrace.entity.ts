import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('subrace')
export class Subrace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}