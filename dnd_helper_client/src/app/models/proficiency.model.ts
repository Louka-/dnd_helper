export interface Proficiency {
  index: string;
  name: string;
  url: string;
}

export interface ProficienciesChoice {
  choose: number;
  description: string;
  options: Proficiency[];
}
