import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Race, RaceDetails } from '../../models/race.model';
import { Subrace } from '../../models/subrace.model';

export interface RaceStateModel {
  races: Race[];
  raceDetails: RaceDetails[];
  subraces: Subrace[];
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

export const selectSubraces = createSelector(
  selectRacesState,
  (state: RaceStateModel) => state.subraces
);

export const selectSubracesByRaceId = (index: string) => createSelector(
  selectRacesState,
  selectSubraces,
  (state: RaceStateModel, subraces: Subrace[]) => subraces.filter(subrace => state.raceDetails.find(race => race.index === index)?.subraces?.find(s => s.index === subrace.index))
);

export const selectRaceById = (index: string) => createSelector(
  selectRacesState,
  (state: RaceStateModel) => state.raceDetails.find(race => race.index === index)
);

