export interface Proficiency {
  index: string;
  name: string;
  url: string;
}

export interface StartingProficiency {
  choose: number;
  description: string;
  options: Proficiency[];
}
