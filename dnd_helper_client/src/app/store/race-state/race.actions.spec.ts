import { Race, RaceDetails } from '../../models/race.model';
import { Subrace } from '../../models/subrace.model';
import { racesActions } from './race.actions';

describe('Races Actions', () => {
  it('should create Get All Races action', () => {
    const action = racesActions.getAllRaces();
    expect(action.type).toBe('[Races] Get All Races');
  });

  it('should create Get All Races Success action', () => {
    const races: Race[] = [{ index: 'race1', name: 'Race 1', url: 'api/races' },];
    const action = racesActions.getAllRacesSuccess({ races });
    expect(action.type).toBe('[Races] Get All Races Success');
    expect(action.races).toEqual(races);
  });

  it('should create Get All Races Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = racesActions.getAllRacesFailure({ error });
    expect(action.type).toBe('[Races] Get All Races Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Get Race By Id From Api action', () => {
    const index = 'race1';
    const action = racesActions.getRaceByIdFromApi({ index });
    expect(action.type).toBe('[Races] Get Race By Id From Api');
    expect(action.index).toBe(index);
  });

  it('should create Get Race From Store action', () => {
    const raceDetails: RaceDetails = {
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
    const action = racesActions.getRaceFromStore({ raceDetails });
    expect(action.type).toBe('[Races] Get Race From Store');
    expect(action.raceDetails).toEqual(raceDetails);
  });

  it('should create Get Race Success action', () => {
    const raceDetails: RaceDetails = {
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
    const action = racesActions.getRaceSuccess({ raceDetails });
    expect(action.type).toBe('[Races] Get Race Success');
    expect(action.raceDetails).toEqual(raceDetails);
  });

  it('should create Get Race Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = racesActions.getRaceFailure({ error });
    expect(action.type).toBe('[Races] Get Race Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Get Subrace By Id action', () => {
    const index = 'subrace1';
    const action = racesActions.getSubraceById({ index });
    expect(action.type).toBe('[Races] Get Subrace By Id');
    expect(action.index).toBe(index);
  });

  it('should create Get Subrace Success action', () => {
    const subraces: Subrace = {
      index: 'subrace1',
      name: 'Subrace 1',
      desc: 'some description',
      ability_bonuses: [],
      starting_proficiencies: [],
      languages: [],
      racial_traits: [],
      url: 'api/subraces/subrace1',
    };
    const action = racesActions.getSubraceSuccess({ subraces });
    expect(action.type).toBe('[Races] Get Subrace Success');
    expect(action.subraces).toEqual(subraces);
  });

  it('should create Get Subrace Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = racesActions.getSubraceFailure({ error });
    expect(action.type).toBe('[Races] Get Subrace Failure');
    expect(action.error).toEqual(error);
  });
});
