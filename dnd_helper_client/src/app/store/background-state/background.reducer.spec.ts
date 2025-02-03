import { backgroundReducer, backgroundInitialState, BackgroundState } from './background.reducer';
import { backgroundsActions } from './background.actions';
import { Background, BackgroundDetails } from '../../models/background.model';

describe('Background Reducer', () => {
  const initialState: BackgroundState = backgroundInitialState;

  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'Unknown' } as any;
    const state = backgroundReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle getAllBackgrounds action', () => {
    const action = backgroundsActions.getAllBackgrounds();
    const state = backgroundReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getAllBackgroundsSuccess action', () => {
    const mockBackgrounds: Background[] = [
      { index: 'background1', name: 'Background 1', url: 'api/backgrounds' },
      { index: 'background2', name: 'Background 2', url: 'api/backgrounds' },
    ];
    const action = backgroundsActions.getAllBackgroundsSuccess({ backgrounds: mockBackgrounds });
    const state = backgroundReducer(initialState, action);

    expect(state).toEqual({ ...initialState, backgrounds: mockBackgrounds });
  });

  it('should handle getBackgroundByIdFromApi action', () => {
    const action = backgroundsActions.getBackgroundByIdFromApi({ index: 'background1' });
    const state = backgroundReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getBackgroundFromStore action', () => {
    const mockBackgroundDetails: BackgroundDetails = {
    index: 'background1',
    name: 'Background 1',
    starting_proficiencies: [],
    language_options: [],
    starting_equipment: [],
    starting_equipment_options: [],
    url: 'api/backgrounds/background1',
  };
    const action = backgroundsActions.getBackgroundFromStore({ backgroundDetails: mockBackgroundDetails });
    const state = backgroundReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getBackgroundSuccess action when backgroundDetails is not already in state', () => {
    const mockBackgroundDetails: BackgroundDetails = {
    index: 'background1',
    name: 'Background 1',
    starting_proficiencies: [],
    language_options: [],
    starting_equipment: [],
    starting_equipment_options: [],
    url: 'api/backgrounds/background1',
  };
    const action = backgroundsActions.getBackgroundSuccess({ backgroundDetails: mockBackgroundDetails });
    const state = backgroundReducer(initialState, action);

    expect(state.backgroundDetails).toContainEqual(mockBackgroundDetails);
  });

  it('should handle getBackgroundSuccess action when backgroundDetails is already in state', () => {
    const mockBackgroundDetails: BackgroundDetails = {
    index: 'background1',
    name: 'Background 1',
    starting_proficiencies: [],
    language_options: [],
    starting_equipment: [],
    starting_equipment_options: [],
    url: 'api/backgrounds/background1',
  };
    const initialStateWithDetails: BackgroundState = {
      ...initialState,
      backgroundDetails: [mockBackgroundDetails],
    };
    const action = backgroundsActions.getBackgroundSuccess({ backgroundDetails: mockBackgroundDetails });
    const state = backgroundReducer(initialStateWithDetails, action);

    expect(state.backgroundDetails.length).toBe(1);
    expect(state.backgroundDetails).toContainEqual(mockBackgroundDetails);
  });
});
