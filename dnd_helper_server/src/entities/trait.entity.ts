import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('trait')
export class Trait {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}