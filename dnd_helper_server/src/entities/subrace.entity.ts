import { Entity, Column, PrimaryColumn } from "typeorm";
import { AbilityBonus } from "./ability-bonus.entity";
import { Proficiency } from "./proficiency.entity";
import { Language } from "./language.entity";
import { Trait } from "./trait.entity";

@Entity('subrace')
export class Subrace {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  ability_bonuses: AbilityBonus[];

  @Column()
  starting_proficiencies: Proficiency[];

  @Column()
  languages?: Language[];

  @Column()
  traits: Trait[];

  @Column()
  url: string;
}