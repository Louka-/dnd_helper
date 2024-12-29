import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AbilityBonus } from "./ability-bonus.entity";

@Entity('ability_bonus_option')
export class AbilityBonusOption {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => AbilityBonus, (abilityScore) => abilityScore.id)
  options: AbilityBonus[];

  @Column()
  choose: number;
}