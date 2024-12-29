import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Language } from "./language.entity";

@Entity('language_option')
export class LanguageOption {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  choose: number;

  @ManyToOne(() => Language, (language) => language.index)
  options: Language[];
}