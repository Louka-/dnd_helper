import { AbilityScore } from "./ability-bonus.model";
import { SpellcastingInfo } from "./spellcasting-info.model";

export interface Spellcasting {
  id?: number;
  level: number;
  spellcastingAbility: AbilityScore;
  info: SpellcastingInfo[];
}
