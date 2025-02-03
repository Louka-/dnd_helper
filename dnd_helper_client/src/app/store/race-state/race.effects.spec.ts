import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { RaceEffects } from './race.effects';
import { RaceService } from '../../services/race.service';
import { SubraceService } from '../../services/subrace.service';
import { racesActions } from './race.actions';
import { draftCharacterActions } from '../draft-character-state/draft-character.actions';
import { draftCharacterInitialState } from '../draft-character-state/draft-character.reducer';
import { hot, cold } from 'jest-marbles';
import { Race, RaceDetails } from '../../models/race.model';
import { Subrace } from '../../models/subrace.model';

describe('RaceEffects', () => {
  let actions$: Observable<any>;
  let effects: RaceEffects;
  let raceService: jest.Mocked<RaceService>;
  let subraceService: jest.Mocked<SubraceService>;
  let store: MockStore;

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

    beforeEach(() => {
      const raceServiceMock = {
        getAllRaces: jest.fn(),
        getRaceById: jest.fn(),
      };

      const subraceServiceMock = {
        getAllSubraces: jest.fn(),
        getSubraceById: jest.fn(),
      };

      TestBed.configureTestingModule({
        providers: [
          RaceEffects,
          provideMockActions(() => actions$),
          provideMockStore(),
          { provide: RaceService, useValue: raceServiceMock },
          { provide: SubraceService, useValue: subraceServiceMock },
        ]
      });

      effects = TestBed.inject(RaceEffects);
      raceService = TestBed.inject(RaceService) as jest.Mocked<RaceService>;
      subraceService = TestBed.inject(SubraceService) as jest.Mocked<SubraceService>;
      store = TestBed.inject(MockStore);
      jest.spyOn(store, 'dispatch');
    });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch getAllRacesSuccess when getAllRaces is called', () => {
    const action = racesActions.getAllRaces();
    const completion = racesActions.getAllRacesSuccess({ races: mockRaces });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: mockRaces });
    raceService.getAllRaces.mockReturnValue(response);

    expect(effects.racesGetAll$).toBeObservable(hot('--b', { b: completion }));
  });

  it('should dispatch getRaceSuccess and other actions when getRaceByIdFromApi is called', () => {
    const action = racesActions.getRaceByIdFromApi({ index: 'race1' });
    const completion = racesActions.getRaceSuccess({ raceDetails: mockRaceDetails });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: mockRaceDetails });
    raceService.getRaceById.mockReturnValue(response);

    expect(effects.raceGetOneByIdFromApi$).toBeObservable(hot('--b', { b: completion }));
    expect(store.dispatch).toHaveBeenCalledWith(draftCharacterActions.getSelectedRace({ selectedRace: mockRaceDetails }));
    expect(store.dispatch).toHaveBeenCalledWith(draftCharacterActions.getRaceAbilityBonuses({ abilityBonuses: mockRaceDetails.ability_bonuses }));
  });

  it('should dispatch getRaceSuccess and other actions when getRaceFromStore is called', () => {
    const action = racesActions.getRaceFromStore({ raceDetails: mockRaceDetails });
    const completion = racesActions.getRaceSuccess({ raceDetails: mockRaceDetails });

    actions$ = hot('-a', { a: action });

    expect(effects.raceGetOneFromStore$).toBeObservable(hot('-b', { b: completion }));
    expect(store.dispatch).toHaveBeenCalledWith(draftCharacterActions.getSelectedRace({ selectedRace: mockRaceDetails }));
    expect(store.dispatch).toHaveBeenCalledWith(draftCharacterActions.getSubraceAbilityBonuses({ abilityBonuses: draftCharacterInitialState.abilityBonuses }));
    expect(store.dispatch).toHaveBeenCalledWith(draftCharacterActions.getRaceAbilityBonuses({ abilityBonuses: mockRaceDetails.ability_bonuses }));
  });

  it('should dispatch getSubraceSuccess and other actions when getSubraceById is called', () => {
    const action = racesActions.getSubraceById({ index: 'subrace1' });
    const completion = racesActions.getSubraceSuccess({ subraces: mockSubrace });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: mockSubrace });
    subraceService.getSubraceById.mockReturnValue(response);

    expect(effects.subraceGetOneById$).toBeObservable(hot('--b', { b: completion }));
    expect(store.dispatch).toHaveBeenCalledWith(draftCharacterActions.getSubraceAbilityBonuses({ abilityBonuses: mockSubrace.ability_bonuses }));
  });
});
