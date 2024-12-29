import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Proficiency } from "./proficiency.entity";

@Entity('proficiencies_option')
export class ProficienciesOption {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  choose: number;

  @ManyToOne(() => Proficiency, (proficiency) => proficiency.index)
  options: Proficiency[];
}