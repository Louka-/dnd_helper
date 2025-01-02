import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
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

  @ManyToOne(() => AbilityBonus, (abilityBonus) => abilityBonus.id)
  ability_bonuses: AbilityBonus[];

  @ManyToOne(() => Proficiency, (proficiency) => proficiency.index)
  starting_proficiencies: Proficiency[];

  @ManyToOne(() => Language, (language) => language.index)
  languages?: Language[];

  @ManyToOne(() => Trait, (trait) => trait.index)
  traits: Trait[];

  @Column()
  url: string;
}