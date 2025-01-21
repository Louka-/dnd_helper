import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClassDetails } from '../../models/class.model';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { RaceDetails } from '../../models/race.model';

export interface DraftCharacterStateModel {
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
}

export const selectDraftCharacterState = createFeatureSelector<DraftCharacterStateModel>('draftCharacter');
export const selectSelectedRace = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.selectedRace
);

export const selectSelectedClass = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.selectedClass
);

export const selectCurrentAbilityBonuses = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.abilityBonuses
);

export const selectStrAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.strAbilityBonus,
);

export const selectConAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.conAbilityBonus,
);

export const selectDexAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.dexAbilityBonus,
);

export const selectIntAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.intAbilityBonus,
);

export const selectWisAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.wisAbilityBonus,
);

export const selectChaAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.chaAbilityBonus,
);

export const selectAvailablePoints = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterStateModel) => state.availablePoints
);

