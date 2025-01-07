import { Entity, Column, PrimaryColumn } from "typeorm";
import { Trait } from "./trait.entity";
import { Language } from "./language.entity";
import { Subrace } from "./subrace.entity";
import { Proficiency } from "./proficiency.entity";
import { AbilityBonus } from "./ability-bonus.entity";
import { ProficienciesOption } from "./proficiencies-option.entity";
import { LanguageOption } from "./language-option.entity";
import { AbilityBonusOption } from "./ability-bonus-option.entity";

@Entity('race')
export class Race {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  speed: number;

  @Column()
  ability_bonuses: AbilityBonus[];

  @Column()
  ability_bonus_options?: AbilityBonusOption;

  @Column()
  alignment: string;

  @Column()
  age: string;

  @Column()
  size: string;

  @Column()
  size_description: string;

  @Column()
  starting_proficiencies: Proficiency[];

  @Column()
  starting_proficiency_options?: ProficienciesOption;

  @Column()
  languages: Language[];

  @Column()
  language_options?: LanguageOption;

  @Column()
  language_desc: string;

  @Column()
  traits: Trait[];

  @Column()
  subraces: Subrace[];

  @Column()
  url: string;
}