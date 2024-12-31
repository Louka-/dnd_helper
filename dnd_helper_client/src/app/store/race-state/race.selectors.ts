import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Race, RaceDetails } from '../../models/race.model';

export interface RaceStateModel {
  races: Race[];
  raceDetails: RaceDetails[];
}

export const selectRacesState = createFeatureSelector<RaceStateModel>('races');
export const selectAllRaces = createSelector(
  selectRacesState,
  (state: RaceStateModel) => state.races
);

export const selectRaceDetails = createSelector(
  selectRacesState,
  (state: RaceStateModel) => state.raceDetails
);

export const selectRaceById = (index: string) => createSelector(
  selectRacesState,
  (state: RaceStateModel) => state.raceDetails.find(race => race.index === index)
);

