import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Spellcasting } from "./spellcasting.entity";

@Entity('spellcasting_info')
export class SpellcastingInfo {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column("text", { array: true })
  desc: string;

  @Column()
  spellcasting: Spellcasting;
}