import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('trait')
export class Trait {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}