import { AbilityScore } from "./ability-bonus.model";
import { Equipment, EquipmentChoice } from "./equipment.model";
// import { Language } from "./language.model";
import { Proficiency, ProficienciesChoice } from "./proficiency.model";
import { Spellcasting } from "./spellcasting.model";
// import { Trait } from "./trait.model";

export interface Class {
  index: string;
  name: string;
  url: string;
}

export interface ClassDetails extends Class {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices?: ProficienciesChoice[];
  proficiencies: Proficiency[];
  saving_throws: AbilityScore[];
  starting_equipment?: Equipment[];
  starting_equipment_options: EquipmentChoice[];
  class_levels: string;
  //TODO set as null for now, later implementation
  subclasses?: string;
  multi_classing?: string;
  spellcasting: Spellcasting;
  spells: string;
  url: string;
}
