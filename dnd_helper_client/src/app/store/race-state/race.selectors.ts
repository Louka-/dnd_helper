import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Subrace } from '../../models/subrace.model';
import { RaceState } from './race.reducer';

export const selectRacesState = createFeatureSelector<RaceState>('races');
export const selectAllRaces = createSelector(
  selectRacesState,
  (state: RaceState) => state.races
);

export const selectRaceDetails = createSelector(
  selectRacesState,
  (state: RaceState) => state.raceDetails
);

export const selectSubraces = createSelector(
  selectRacesState,
  (state: RaceState) => state.subraces
);

export const selectSubracesByRaceId = (index: string) => createSelector(
  selectRacesState,
  selectSubraces,
  (state: RaceState, subraces: Subrace[]) => subraces.filter(subrace => state.raceDetails.find(race => race.index === index)?.subraces?.find(s => s.index === subrace.index))
);

export const selectRaceById = (index: string) => createSelector(
  selectRacesState,
  (state: RaceState) => state.raceDetails.find(race => race.index === index)
);

