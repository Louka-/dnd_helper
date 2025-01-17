import { createReducer, on } from '@ngrx/store';
import { ClassDetails } from '../../models/class.model';
import { RaceDetails } from '../../models/race.model';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { draftCharacterActions } from './draft-character.actions';

export interface State {
  selectedRace: RaceDetails;
  selectedClass: ClassDetails;
  abilityBonuses: AbilityBonus[];
  strAbilityBonus: AbilityBonus;
  conAbilityBonus: AbilityBonus;
  dexAbilityBonus: AbilityBonus;
  intAbilityBonus: AbilityBonus;
  wisAbilityBonus: AbilityBonus;
  chaAbilityBonus: AbilityBonus;
  availablePoints: number;
};

export const draftCharacterInitialState: State = {
  selectedRace: {} as RaceDetails,
  selectedClass: {} as ClassDetails,
  abilityBonuses: [
    {
      ability_score: {
        index: 'str',
        name: 'STR',
        url: '/api/ability-scores/str',
      },
      bonus: 0
    },
    {
      ability_score: {
        index: 'con',
        name: 'CON',
        url: '/api/ability-scores/con',
      },
      bonus: 0
    },
    {
      ability_score: {
        index: 'dex',
        name: 'DEX',
        url: '/api/ability-scores/dex',
      },
      bonus: 0
    },
    {
      ability_score: {
        index: 'int',
        name: 'INT',
        url: '/api/ability-scores/int',
      },
      bonus: 0
    },
    {
      ability_score: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis',
      },
      bonus: 0
    },
    {
      ability_score: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      bonus: 0
    },
  ],
  strAbilityBonus:
  {
    ability_score: {
      index: 'str',
      name: 'STR',
      url: '/api/ability-scores/str',
    },
    bonus: 8
  },
  conAbilityBonus:
  {
    ability_score: {
      index: 'con',
      name: 'CON',
      url: '/api/ability-scores/con',
    },
    bonus: 8
  },
  dexAbilityBonus:
  {
    ability_score: {
      index: 'dex',
      name: 'DEX',
      url: '/api/ability-scores/dex',
    },
    bonus: 8
  },
  intAbilityBonus:
  {
    ability_score: {
      index: 'int',
      name: 'INT',
      url: '/api/ability-scores/int',
    },
    bonus: 8
  },
  wisAbilityBonus:
  {
    ability_score: {
      index: 'wis',
      name: 'WIS',
      url: '/api/ability-scores/wis',
    },
    bonus: 8
  },
  chaAbilityBonus:
  {
    ability_score: {
      index: 'cha',
      name: 'CHA',
      url: '/api/ability-scores/cha',
    },
    bonus: 8
  },
  availablePoints: 27,
};

export const draftCharacterReducer = createReducer(
  draftCharacterInitialState,
  on(draftCharacterActions.getSelectedRace, (state) => ({ ...state })),
  on(draftCharacterActions.getSelectedRaceSuccess, (state,  {selectedRace }) => ({ ...state, selectedRace: selectedRace })),
  on(draftCharacterActions.getSelectedClass, (state) => ({ ...state })),
  on(draftCharacterActions.getSelectedClassSuccess, (state, { selectedClass }) => ({ ...state, selectedClass: selectedClass })),
  on(draftCharacterActions.getRaceAbilityBonuses, (state) => ({ ...state })),
  on(draftCharacterActions.getRaceAbilityBonusesSuccess, (state, { abilityBonuses }) => ({ ...state, abilityBonuses: abilityBonuses })),
  on(draftCharacterActions.getSubraceAbilityBonuses, (state) => ({ ...state })),
  on(draftCharacterActions.getSubraceAbilityBonusesSuccess, (state, { abilityBonuses }) => ({ ...state, abilityBonuses: abilityBonuses })),
  on(draftCharacterActions.resetAbilityPoints, (state) => ({
    ...state,
    availablePoints: draftCharacterInitialState.availablePoints,
    strAbilityBonus: draftCharacterInitialState.strAbilityBonus,
    conAbilityBonus: draftCharacterInitialState.conAbilityBonus,
    dexAbilityBonus: draftCharacterInitialState.dexAbilityBonus,
    intAbilityBonus: draftCharacterInitialState.intAbilityBonus,
    wisAbilityBonus: draftCharacterInitialState.wisAbilityBonus,
    chaAbilityBonus: draftCharacterInitialState.chaAbilityBonus,
  })),
  on(draftCharacterActions.increaseAbilityPoints, (state) => ({ ...state, availablePoints: state.availablePoints + 1 })),
  on(draftCharacterActions.decreaseAbilityPoints, (state) => ({ ...state, availablePoints: state.availablePoints !== 0 ? state.availablePoints - 1 : 0 })),
  on(draftCharacterActions.increaseAbilityBonus, (state, { index }) => {
    switch (index) {
      case 'str':
        return { ...state, strAbilityBonus: { ...state.strAbilityBonus, bonus: state.strAbilityBonus.bonus + 1 } };
      case 'con':
        return { ...state, conAbilityBonus: { ...state.conAbilityBonus, bonus: state.conAbilityBonus.bonus + 1 } };
      case 'dex':
        return { ...state, dexAbilityBonus: { ...state.dexAbilityBonus, bonus: state.dexAbilityBonus.bonus + 1 } };
      case 'int':
        return { ...state, intAbilityBonus: { ...state.intAbilityBonus, bonus: state.intAbilityBonus.bonus + 1 } };
      case 'wis':
        return { ...state, wisAbilityBonus: { ...state.wisAbilityBonus, bonus: state.wisAbilityBonus.bonus + 1 } };
      case 'cha':
        return { ...state, chaAbilityBonus: { ...state.chaAbilityBonus, bonus: state.chaAbilityBonus.bonus + 1 } };
      default:
        return state;
    }
  }),
  on(draftCharacterActions.decreaseAbilityBonus, (state, { index }) => {
    switch (index) {
      case 'str':
        return { ...state, strAbilityBonus: { ...state.strAbilityBonus, bonus: state.strAbilityBonus.bonus - 1 } };
      case 'con':
        return { ...state, conAbilityBonus: { ...state.conAbilityBonus, bonus: state.conAbilityBonus.bonus - 1 } };
      case 'dex':
        return { ...state, dexAbilityBonus: { ...state.dexAbilityBonus, bonus: state.dexAbilityBonus.bonus - 1 } };
      case 'int':
        return { ...state, intAbilityBonus: { ...state.intAbilityBonus, bonus: state.intAbilityBonus.bonus - 1 } };
      case 'wis':
        return { ...state, wisAbilityBonus: { ...state.wisAbilityBonus, bonus: state.wisAbilityBonus.bonus - 1 } };
      case 'cha':
        return { ...state, chaAbilityBonus: { ...state.chaAbilityBonus, bonus: state.chaAbilityBonus.bonus - 1 } };
      default:
        return state;
    }
  })
);

