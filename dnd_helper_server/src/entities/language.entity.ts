import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('language')
export class Language {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}