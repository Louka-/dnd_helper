import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbilityScore } from "./ability-score.entity";
import { SpellcastingInfo } from "./spellcasting-info.entity";

@Entity('spellcasting')
export class Spellcasting {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  level: number;

  @Column()
  spellcastingAbility: AbilityScore;

  @Column()
  info: SpellcastingInfo[];
}