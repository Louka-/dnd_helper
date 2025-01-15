import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClassDetails } from '../../models/class.model';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { RaceDetails } from '../../models/race.model';

export interface DraftCharacterStateModel {
  selectedRace: RaceDetails;
  selectedClass: ClassDetails;
  abilityBonuses: AbilityBonus[];
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

