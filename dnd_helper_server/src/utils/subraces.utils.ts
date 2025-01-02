import { AbilityBonus } from "src/entities/ability-bonus.entity";
import { Language } from "src/entities/language.entity";
import { Proficiency } from "src/entities/proficiency.entity";
import { Subrace } from "src/entities/subrace.entity";
import { Trait } from "src/entities/trait.entity";

export default class SubraceUtils {

  static mapStartingProficienciesFromApi(data: any): Proficiency[] {
    return data.starting_proficiencies ?? [] as Proficiency[];
  }

  static mapAbilityScoreFromApi(data: any): AbilityBonus[] {
    return data.ability_bonuses.map(element => ({
      ability_score: element.ability_score,
      bonus: element.bonus
    }))
  }

  static mapLanguagesFromApi(data: any): Language[] {
    return data.languages ? data.languages.map(element => ({
      index: element.item.index,
      name: element.item.name,
      url: element.item.url
    })) : [] as Language[];
  }

  static mapTraitsFromApi(data: any): Trait[] {
    return data.racial_traits ?? [] as Trait[];
  }

  static mapSubraceFromApi(data: any): Subrace {
    return {
      ...data,
      starting_proficiencies: this.mapStartingProficienciesFromApi(data),
      ability_bonuses: this.mapAbilityScoreFromApi(data),
      languages: this.mapLanguagesFromApi(data),
      traits: this.mapTraitsFromApi(data),
    }
  }
}