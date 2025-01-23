import { Equipment, EquipmentChoice } from "./equipment.model";
import { LanguageChoice } from "./language.model";
import { Proficiency } from "./proficiency.model";

export interface Background {
  index: string;
  name: string;
  url: string;
}

export interface BackgroundDetails {
  index: string;
  name: string;
  starting_proficiencies: Proficiency[];
  language_options?: LanguageChoice[];
  starting_equipment: Equipment[];
  starting_equipment_options: EquipmentChoice[];
  //feature
  url: string;
}
