import { selectRacesState, selectAllRaces, selectRaceDetails, selectSubraces, selectSubracesByRaceId, selectRaceById } from './race.selectors';
import { RaceState } from './race.reducer';
import { Race, RaceDetails } from '../../models/race.model';
import { Subrace } from '../../models/subrace.model';

describe('Race Selectors', () => {
  const initialState: RaceState = {
    races: [
      { index: 'race1', name: 'Race 1', url: 'api/races' },
      { index: 'race2', name: 'Race 2', url: 'api/races' },
    ],
    raceDetails: [{
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
    }],
    subraces: [{
      index: 'subrace1',
      name: 'Subrace 1',
      desc: 'some description',
      ability_bonuses: [],
      starting_proficiencies: [],
      languages: [],
      racial_traits: [],
      url: 'api/subraces/subrace1',
    }]
  };

  it('should select the races state', () => {
    const result = selectRacesState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select all races', () => {
    const result = selectAllRaces.projector(initialState);
    expect(result).toEqual(initialState.races);
  });

  it('should select race details', () => {
    const result = selectRaceDetails.projector(initialState);
    expect(result).toEqual(initialState.raceDetails);
  });

  it('should select all subraces', () => {
    const result = selectSubraces.projector(initialState);
    expect(result).toEqual(initialState.subraces);
  });

  it('should select subraces by race id', () => {
    const index = 'race1';
    const selector = selectSubracesByRaceId(index);
    const result = selector.projector(initialState, initialState.subraces);
    expect(result).toEqual(initialState.subraces);
  });

  it('should select a race by id', () => {
    const index = 'race1';
    const selector = selectRaceById(index);
    const result = selector.projector(initialState);
    expect(result).toEqual(initialState.raceDetails[0]);
  });

  it('should return undefined for non-existent race id', () => {
    const index = 'nonExistentId';
    const selector = selectRaceById(index);
    const result = selector.projector(initialState);
    expect(result).toBeUndefined();
  });

  it('should return empty array for subraces by non-existent race id', () => {
    const index = 'nonExistentId';
    const selector = selectSubracesByRaceId(index);
    const result = selector.projector(initialState, initialState.subraces);
    expect(result).toEqual([]);
  });
});
