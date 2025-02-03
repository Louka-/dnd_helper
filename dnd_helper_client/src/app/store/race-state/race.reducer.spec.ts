import { raceReducer, raceInitialState, RaceState } from './race.reducer';
import { racesActions } from './race.actions';
import { Race, RaceDetails } from '../../models/race.model';
import { Subrace } from '../../models/subrace.model';

describe('Race Reducer', () => {
  const initialState: RaceState = raceInitialState;

  const mockRaces: Race[] = [
    { index: 'race1', name: 'Race 1', url: 'api/races' },
    { index: 'race2', name: 'Race 2', url: 'api/races' },
  ];

  const mockRaceDetails: RaceDetails = {
    index: 'race1',
    name: 'Race 1',
    url: 'api/race',
    ability_bonuses: [],
    age: 'string',
    alignment: 'string',
    language_desc: 'string',
    languages: [],
    size: 'string',
    size_description: 'string',
    speed: 5,
    starting_proficiencies: [],
    starting_proficiency_options: undefined,
    subraces: [],
    traits: [],
  };

    const mockSubrace: Subrace = {
      index: 'subrace1',
      name: 'Subrace 1',
      desc: 'some description',
      ability_bonuses: [],
      starting_proficiencies: [],
      languages: [],
      racial_traits: [],
      url: 'api/subraces/subrace1',
    };

  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'Unknown' } as any;
    const state = raceReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle getAllRaces action', () => {
    const action = racesActions.getAllRaces();
    const state = raceReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getAllRacesSuccess action', () => {
    const races: Race[] = mockRaces;
    const action = racesActions.getAllRacesSuccess({ races });
    const state = raceReducer(initialState, action);

    expect(state.races).toEqual(races);
  });

  it('should handle getRaceByIdFromApi action', () => {
    const action = racesActions.getRaceByIdFromApi({ index: 'race1' });
    const state = raceReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getRaceFromStore action', () => {
    const raceDetails: RaceDetails = mockRaceDetails;
    const action = racesActions.getRaceFromStore({ raceDetails });
    const state = raceReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getRaceSuccess action', () => {
    const raceDetails: RaceDetails = mockRaceDetails;
    const action = racesActions.getRaceSuccess({ raceDetails });
    const state = raceReducer(initialState, action);

    expect(state.raceDetails).toEqual([raceDetails]);
  });

  it('should not duplicate raceDetails when getRaceSuccess is called with an existing raceDetails', () => {
    const existingState: RaceState = {
      ...initialState,
      raceDetails: [mockRaceDetails],
    };
    const raceDetails: RaceDetails = mockRaceDetails;
    const action = racesActions.getRaceSuccess({ raceDetails });
    const state = raceReducer(existingState, action);

    expect(state.raceDetails).toEqual([mockRaceDetails]);
  });

  it('should handle getSubraceById action', () => {
    const action = racesActions.getSubraceById({ index: 'subrace1' });
    const state = raceReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getSubraceSuccess action', () => {
    const subraces: Subrace = mockSubrace;
    const action = racesActions.getSubraceSuccess({ subraces });
    const state = raceReducer(initialState, action);

    expect(state.subraces).toEqual([subraces]);
  });

  it('should not duplicate subraces when getSubraceSuccess is called with an existing subrace', () => {
    const existingState: RaceState = {
      ...initialState,
      subraces: [mockSubrace],
    };
    const subraces: Subrace = mockSubrace;
    const action = racesActions.getSubraceSuccess({ subraces });
    const state = raceReducer(existingState, action);

    expect(state.subraces).toEqual([mockSubrace]);
  });
});
