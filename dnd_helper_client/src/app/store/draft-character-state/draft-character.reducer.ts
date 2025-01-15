import { createReducer, on } from '@ngrx/store';
import { ClassDetails } from '../../models/class.model';
import { RaceDetails } from '../../models/race.model';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { draftCharacterActions } from './draft-character.actions';

export interface State {
  selectedRace: RaceDetails;
  selectedClass: ClassDetails;
  abilityBonuses: AbilityBonus[];
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
);

