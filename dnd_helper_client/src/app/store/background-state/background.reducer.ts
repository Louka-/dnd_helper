import { createReducer, on } from '@ngrx/store';
import { backgroundsActions } from './background.actions';
import { Background, BackgroundDetails } from '../../models/background.model';

export interface BackgroundState {
  backgrounds: Background[];
  backgroundDetails: BackgroundDetails[];
};

export const backgroundInitialState: BackgroundState = {
  backgrounds: [],
  backgroundDetails: [],
};

export const backgroundReducer = createReducer(
  backgroundInitialState,
  on(backgroundsActions.getAllBackgrounds, (state) => ({ ...state })),
  on(backgroundsActions.getAllBackgroundsSuccess, (state, { backgrounds }) => ({ ...state, backgrounds: backgrounds })),
  on(backgroundsActions.getBackgroundByIdFromApi, (state) => ({ ...state })),
  on(backgroundsActions.getBackgroundFromStore, (state) => ({ ...state })),
  on(backgroundsActions.getBackgroundSuccess, (state, { backgroundDetails }) => ({
    ...state, backgroundDetails:
      (state.backgroundDetails.some(storedRace => storedRace.index === backgroundDetails.index) && state.backgroundDetails.length !== 0)
        ? state.backgroundDetails
        : [...state.backgroundDetails, backgroundDetails]
  })),
);

