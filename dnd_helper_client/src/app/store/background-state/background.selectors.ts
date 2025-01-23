import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BackgroundState } from './background.reducer';

export const selectBackgroundsState = createFeatureSelector<BackgroundState>('backgrounds');
export const selectAllBackgrounds = createSelector(
  selectBackgroundsState,
  (state: BackgroundState) => state.backgrounds
);

export const selectBackgroundDetails = createSelector(
  selectBackgroundsState,
  (state: BackgroundState) => state.backgroundDetails
);

export const selectBackgroundById = (index: string) => createSelector(
  selectBackgroundsState,
  (state: BackgroundState) => state.backgroundDetails.find(background => background.index === index)
);

