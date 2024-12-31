import { Spellcasting } from "./spellcasting.model";

export interface SpellcastingInfo {
  id?: number;
  name: string;
  desc: string;
  spellcasting: Spellcasting;
}
