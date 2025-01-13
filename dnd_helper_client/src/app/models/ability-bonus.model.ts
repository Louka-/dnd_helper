export interface AbilityScore {
  index: string;
  name: string;
  url: string;
}

export interface AbilityBonuses {
  ability_score: AbilityScore;
  bonus: number;
}

export interface AbilityBonus {
  ability_score: string;
  bonus: number;
}
