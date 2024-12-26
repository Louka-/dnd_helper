import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('equipment')
export class Equipment {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  url: string;
}