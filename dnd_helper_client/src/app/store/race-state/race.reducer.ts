import { createReducer, on } from '@ngrx/store';
import { racesActions } from './race.actions';
import { Race, RaceDetails } from '../../models/race.model';
import { Subrace } from '../../models/subrace.model';

export interface State {
  races: Race[];
  raceDetails: RaceDetails[];
  subraces: Subrace[];
};

export const initialState: State = {
  races: [],
  raceDetails: [],
  subraces: [],
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
  on(racesActions.getSubraceById, (state) => ({ ...state })),
  on(racesActions.getSubraceSuccess, (state, { subraces }) => ({
    ...state, subraces:
      (state.subraces.some(storedRace => storedRace.index === subraces.index) && state.subraces.length !== 0)
        ? state.subraces
        : [...state.subraces, subraces]
  })),
);

