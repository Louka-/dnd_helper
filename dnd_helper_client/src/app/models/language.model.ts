export interface Language {
  index: string;
  name: string;
  url: string;
}

export interface LanguageChoice {
  id?: string;
  choose: number;
  options: Language[];
}
