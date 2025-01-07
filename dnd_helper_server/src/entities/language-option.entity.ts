import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Language } from "./language.entity";

@Entity('language_option')
export class LanguageOption {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  choose: number;

  @Column()
  options: Language[];
}