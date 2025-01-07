import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbilityScore } from "./ability-score.entity";

@Entity('ability_bonus')
export class AbilityBonus {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  ability_score: AbilityScore;

  @Column()
  bonus: number;
}