import { AbilityBonuses } from "./ability-bonus.model";
import { Language } from "./language.model";
import { Proficiency } from "./proficiency.model";
import { Trait } from "./trait.model";

export interface Subrace {
  index: string;
  name: string;
  desc: string;
  ability_bonuses: AbilityBonuses[];
  starting_proficiencies: Proficiency[];
  languages?: Language[];
  racial_traits: Trait[];
  url: string;
}
