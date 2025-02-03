import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { BackgroundEffects } from './background.effects';
import { BackgroundService } from '../../services/background.service';
import { backgroundsActions } from './background.actions';
import { draftCharacterActions } from '../draft-character-state/draft-character.actions';
import { Action } from '@ngrx/store';
import { Background, BackgroundDetails } from '../../models/background.model';
import { cold, hot } from 'jest-marbles';

describe('BackgroundEffects', () => {
  let actions$: Observable<Action>;
  let effects: BackgroundEffects;
  let backgroundService: jest.Mocked<BackgroundService>;
  let store: MockStore;

  const mockBackgrounds: Background[] = [
    { index: 'background1', name: 'Background 1', url: 'api/backgrounds' },
    { index: 'background2', name: 'Background 2', url: 'api/backgrounds' },
  ];

  const mockBackgroundDetails: BackgroundDetails = {
    index: 'background1',
    name: 'Background 1',
    starting_proficiencies: [],
    language_options: [],
    starting_equipment: [],
    starting_equipment_options: [],
    url: 'api/backgrounds/background1',
  };

  beforeEach(() => {
    const backgroundServiceMock = {
      getAllBackgrounds: jest.fn(),
      getBackgroundById: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        BackgroundEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        { provide: BackgroundService, useValue: backgroundServiceMock }
      ]
    });

    effects = TestBed.inject(BackgroundEffects);
    backgroundService = TestBed.inject(BackgroundService) as jest.Mocked<BackgroundService>;
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
  });

  it('should dispatch getAllBackgroundsSuccess when getAllBackgrounds is successful', () => {
    const action = backgroundsActions.getAllBackgrounds();
    const completion = backgroundsActions.getAllBackgroundsSuccess({ backgrounds: mockBackgrounds });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: mockBackgrounds });
    backgroundService.getAllBackgrounds.mockReturnValue(response);

    const expected = cold('--b', { b: completion });

    expect(effects.backgroundsGetAll$).toBeObservable(expected);
  });

  it('should dispatch getBackgroundSuccess and getSelectedBackground when getBackgroundByIdFromApi is successful', () => {
    const action = backgroundsActions.getBackgroundByIdFromApi({ index: 'background1' });
    const completion = backgroundsActions.getBackgroundSuccess({ backgroundDetails: mockBackgroundDetails });
    const draftAction = draftCharacterActions.getSelectedBackground({ selectedBackground: mockBackgroundDetails });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: mockBackgroundDetails });
    backgroundService.getBackgroundById.mockReturnValue(response);
    effects.backgroundGetOneByIdFromApi$.subscribe(resultAction => {
      expect(resultAction).toEqual(completion);
      expect(store.dispatch).toHaveBeenCalledWith(draftAction);
    });
  });

  it('should dispatch getBackgroundSuccess and getSelectedBackground when getBackgroundFromStore is called', () => {
    const action = backgroundsActions.getBackgroundFromStore({ backgroundDetails: mockBackgroundDetails });
    const completion = backgroundsActions.getBackgroundSuccess({ backgroundDetails: mockBackgroundDetails });
    const draftAction = draftCharacterActions.getSelectedBackground({ selectedBackground: mockBackgroundDetails });

    actions$ = hot('-a', { a: action });
    effects.backgroundGetOneFromStore$.subscribe(resultAction => {
      expect(resultAction).toEqual(completion);
      expect(store.dispatch).toHaveBeenCalledWith(draftAction);
    });
  });
});
