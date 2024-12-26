import { Entity, Column, ManyToOne, PrimaryColumn, OneToOne } from "typeorm";
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

  @ManyToOne(() => AbilityBonus, (abilityBonus) => abilityBonus.id)
  ability_bonuses: AbilityBonus[];

  @OneToOne(() => AbilityBonusOption, (abilityBonusOption) => abilityBonusOption.id)
  ability_bonus_options?: AbilityBonusOption;

  @Column()
  alignment: string;

  @Column()
  age: string;

  @Column()
  size: string;

  @Column()
  size_description: string;

  @ManyToOne(() => Proficiency, (proficiency) => proficiency.index)
  starting_proficiencies: Proficiency[];

  @OneToOne(() => ProficienciesOption, (proficiencyOption) => proficiencyOption.id)
  starting_proficiency_options?: ProficienciesOption;

  @ManyToOne(() => Language, (language) => language.index)
  languages: Language[];

  @OneToOne(() => LanguageOption, (languageOption) => languageOption.id)
  language_options?: LanguageOption;

  @Column()
  language_desc: string;

  @ManyToOne(() => Trait, (trait) => trait.index)
  traits: Trait[];

  @ManyToOne(() => Subrace, (subrace) => subrace.index)
  subraces: Subrace[];

  @Column()
  url: string;
}