import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { AbilityScore } from "./ability-score.entity";

@Entity('ability_bonus')
export class AbilityBonus {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AbilityScore)
  ability_score: AbilityScore;

  @Column()
  bonus: number;
}