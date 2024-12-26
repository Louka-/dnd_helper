import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('subrace')
export class Subrace {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}