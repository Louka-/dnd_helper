import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbilityBonus } from "./ability-bonus.entity";

@Entity('ability_bonus_option')
export class AbilityBonusOption {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  options: AbilityBonus[];

  @Column()
  choose: number;
}