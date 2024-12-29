import { AbilityBonusOption } from "src/entities/ability-bonus-option.entity";
import { AbilityBonus } from "src/entities/ability-bonus.entity";
import { LanguageOption } from "src/entities/language-option.entity";
import { Language } from "src/entities/language.entity";
import { ProficienciesOption } from "src/entities/proficiencies-option.entity";
import { Proficiency } from "src/entities/proficiency.entity";
import { Race } from "src/entities/race.entity";

export default class RacesUtils {
  static mapStartingProficiencyChoicesFromApi(data: any): ProficienciesOption {
    if (data.starting_proficiency_options) {
      return {
        description: data.starting_proficiency_options.desc,
        choose: data.starting_proficiency_options.choose,
        options: data.starting_proficiency_options.from.options.map(element => (element.item))
      };
    }
  }

  static mapStartingProficienciesFromApi(data: any): Proficiency[] {
    return data.starting_proficiencies ?? [] as Proficiency[]
  }

  static mapAbilityScoreFromApi(data: any): AbilityBonus[] {
    return data.map(element => ({
      ability_score: element.ability_score,
      bonus: element.bonus
    }))
  }

  static mapAbilityBonusOptionFromApi(data: any): AbilityBonusOption {
    if (data.ability_bonus_options) {
      return {
        choose: data.ability_bonus_options.choose,
        options: this.mapAbilityScoreFromApi(data.ability_bonus_options.from.options)
      }
    }
  }

  static mapLanguagesFromApi(data: any): Language[] {
    return data.map(element => ({
      index: element.item.index,
      name: element.item.name,
      url: element.item.url
    }))
  }

  static mapLanguageOptionFromApi(data: any): LanguageOption {
    if (data.language_options) {
      return {
        choose: data.language_options.choose,
        options: this.mapLanguagesFromApi(data.language_options.from.options)
      }
    }
  }

  static mapRaceFromApi(data: any): Race {
    return {
      ...data,
      ability_bonus_options: this.mapAbilityBonusOptionFromApi(data),
      language_options: this.mapLanguageOptionFromApi(data),
      starting_proficiencies: this.mapStartingProficienciesFromApi(data),
      starting_proficiency_options: this.mapStartingProficiencyChoicesFromApi(data),
    }
  }
}