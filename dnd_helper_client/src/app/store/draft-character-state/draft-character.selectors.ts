import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DraftCharacterState } from './draft-character.reducer';

export const selectDraftCharacterState = createFeatureSelector<DraftCharacterState>('draftCharacter');
export const selectSelectedRace = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.selectedRace
);

export const selectSelectedClass = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.selectedClass
);

export const selectCurrentAbilityBonuses = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.abilityBonuses
);

export const selectStrAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.strAbilityBonus,
);

export const selectConAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.conAbilityBonus,
);

export const selectDexAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.dexAbilityBonus,
);

export const selectIntAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.intAbilityBonus,
);

export const selectWisAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.wisAbilityBonus,
);

export const selectChaAbilityBonus = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.chaAbilityBonus,
);

export const selectAvailablePoints = createSelector(
  selectDraftCharacterState,
  (state: DraftCharacterState) => state.availablePoints
);

