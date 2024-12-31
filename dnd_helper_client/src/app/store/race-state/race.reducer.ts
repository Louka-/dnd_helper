import { createReducer, on } from '@ngrx/store';
import { racesActions } from './race.actions';
import { Race, RaceDetails } from '../../models/race.model';

export interface State {
  races: Race[];
  raceDetails: RaceDetails[];
};

export const initialState: State = {
  races: [],
  raceDetails: [],
};

export const raceReducer = createReducer(
  initialState,
  on(racesActions.getAllRaces, (state) => ({ ...state })),
  on(racesActions.getAllRacesSuccess, (state, { races }) => ({ ...state, races: races })),
  on(racesActions.getRaceById, (state) => ({ ...state })),
  on(racesActions.getRaceSuccess, (state, { raceDetails }) => ({
    ...state, raceDetails:
      (state.raceDetails.some(storedRace => storedRace.index === raceDetails.index) && state.raceDetails.length !== 0)
        ? state.raceDetails
        : [...state.raceDetails, raceDetails]
  })),
);

