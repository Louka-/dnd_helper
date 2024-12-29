import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AbilityScore } from "./ability-score.entity";
import { SpellcastingInfo } from "./spellcasting-info.entity";

@Entity('spellcasting')
export class Spellcasting {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  level: number;

  @ManyToOne(() => AbilityScore, abilityScore => abilityScore.index)
  spellcastingAbility: AbilityScore;

  @ManyToOne(() => SpellcastingInfo, info => info.spellcasting)
  info: SpellcastingInfo[];
}