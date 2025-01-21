import { AbilityBonus } from "../models/ability-bonus.model";
import { draftCharacterInitialState, DraftCharacterState } from "../store/draft-character-state/draft-character.reducer";

export default class DraftCharacterStateUtils {
  static getInitialStrengthWithRacialBonuses(state: DraftCharacterState): AbilityBonus {
    if(state.abilityBonuses.filter(ability => ability.ability_score.index === 'str')) {
      return { ...state.strAbilityBonus, bonus: state.abilityBonuses.filter(ability => ability.ability_score.index === 'str')[0].bonus + draftCharacterInitialState.strAbilityBonus.bonus };
      ;
    } else {
      return draftCharacterInitialState.strAbilityBonus;
    }
  }

  static getInitialConstitutionWithRacialBonuses(state: DraftCharacterState): AbilityBonus {
    if(state.abilityBonuses.filter(ability => ability.ability_score.index === 'con')) {
      return { ...state.conAbilityBonus, bonus: state.abilityBonuses.filter(ability => ability.ability_score.index === 'con')[0].bonus + draftCharacterInitialState.conAbilityBonus.bonus };
      ;
    } else {
      return draftCharacterInitialState.conAbilityBonus;
    }
  }

  static getInitialDexterityWithRacialBonuses(state: DraftCharacterState): AbilityBonus {
    if(state.abilityBonuses.filter(ability => ability.ability_score.index === 'dex')) {
      return { ...state.dexAbilityBonus, bonus: state.abilityBonuses.filter(ability => ability.ability_score.index === 'dex')[0].bonus + draftCharacterInitialState.dexAbilityBonus.bonus };
      ;
    } else {
      return draftCharacterInitialState.dexAbilityBonus;
    }
  }

  static getInitialIntelligenceWithRacialBonuses(state: DraftCharacterState): AbilityBonus {
    if(state.abilityBonuses.filter(ability => ability.ability_score.index === 'int')) {
      return { ...state.intAbilityBonus, bonus: state.abilityBonuses.filter(ability => ability.ability_score.index === 'int')[0].bonus + draftCharacterInitialState.intAbilityBonus.bonus };
      ;
    } else {
      return draftCharacterInitialState.intAbilityBonus;
    }
  }

  static getInitialWisdomWithRacialBonuses(state: DraftCharacterState): AbilityBonus {
    if(state.abilityBonuses.filter(ability => ability.ability_score.index === 'wis')) {
      return { ...state.wisAbilityBonus, bonus: state.abilityBonuses.filter(ability => ability.ability_score.index === 'wis')[0].bonus + draftCharacterInitialState.wisAbilityBonus.bonus };
      ;
    } else {
      return draftCharacterInitialState.wisAbilityBonus;
    }
  }

  static getInitialCharismaWithRacialBonuses(state: DraftCharacterState): AbilityBonus {
    if(state.abilityBonuses.filter(ability => ability.ability_score.index === 'cha')) {
      return { ...state.chaAbilityBonus, bonus: state.abilityBonuses.filter(ability => ability.ability_score.index === 'cha')[0].bonus + draftCharacterInitialState.chaAbilityBonus.bonus };
      ;
    } else {
      return draftCharacterInitialState.chaAbilityBonus;
    }
  }
}
