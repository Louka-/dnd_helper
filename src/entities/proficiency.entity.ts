import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('proficiency')
export class Proficiency {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}