import { AbilityBonus } from "./ability-bonus.model";
import { Language } from "./language.model";
import { Proficiency, ProficienciesChoice } from "./proficiency.model";
import { Subrace } from "./subrace.model";
import { Trait } from "./trait.model";

export interface Race {
  index: string;
  name: string;
  url: string;
}

export interface RaceDetails extends Race {
  ability_bonuses: AbilityBonus[];
  age: string;
  alignment: string;
  language_desc: string;
  languages: Language[];
  name: string;
  size: string;
  size_description: string;
  speed: number;
  starting_proficiencies?: Proficiency[];
  starting_proficiency_options?: ProficienciesChoice;
  subraces?: Subrace[];
  traits: Trait[];
}
