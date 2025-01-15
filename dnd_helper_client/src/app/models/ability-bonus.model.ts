export interface AbilityScore {
  index: string;
  name: string;
  url: string;
}

export interface AbilityBonus {
  ability_score: AbilityScore;
  bonus: number;
}
