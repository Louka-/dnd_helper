import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Proficiency } from "./proficiency.entity";

@Entity('proficiencies_option')
export class ProficienciesOption {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  choose: number;

  @Column()
  options: Proficiency[];
}