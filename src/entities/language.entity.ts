import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: string;

  @Column()
  name: string;

  @Column()
  url: string;
}