import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trait } from "./trait.entity";
import { Language } from "./language.entity";
import { Subrace } from "./subrace.entity";
import { Proficiency } from "./proficiency.entity";
import { AbilityBonus } from "./ability-bonus.entity";

@Entity('race')
export class Race {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: string;

  @Column()
  name: string;

  @Column()
  speed: number;

  @OneToMany(() => AbilityBonus, (abilityBonus) => abilityBonus.id)
  ability_bonuses: AbilityBonus[];

  @Column()
  alignment: string;

  @Column()
  age: string;

  @Column()
  size: string;

  @Column()
  size_description: string;

  @OneToMany(() => Proficiency, (proficiency) => proficiency.id)
  starting_proficiencies: Proficiency[];

  @Column()
  starting_proficiency_options_desc: string;

  @Column()
  starting_proficiency_options_choose: number;

  @OneToMany(() => Proficiency, (proficiency) => proficiency.id)
  starting_proficiency_options: Proficiency[];

  @OneToMany(() => Language, (language) => language.id)
  languages: Language[];

  @Column()
  language_desc: string;

  @OneToMany(() => Trait, (trait) => trait.id)
  traits: Trait[];

  @OneToMany(() => Subrace, (subrace) => subrace.id)
  subraces: Subrace[];

  @Column()
  url: string;
}