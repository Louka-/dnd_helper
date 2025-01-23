import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClassState } from './class.reducer';

export const selectClassesState = createFeatureSelector<ClassState>('classes');
export const selectAllClasses = createSelector(
  selectClassesState,
  (state: ClassState) => state.classes
);

export const selectClassDetails = createSelector(
  selectClassesState,
  (state: ClassState) => state.classDetails
);

export const selectClassById = (index: string) => createSelector(
  selectClassesState,
  (state: ClassState) => state.classDetails.find(c => c.index === index)
);

