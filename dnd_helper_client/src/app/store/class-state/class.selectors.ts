import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Class, ClassDetails } from '../../models/class.model';

export interface ClassStateModel {
  classes: Class[];
  classDetails: ClassDetails[];
}

export const selectClassesState = createFeatureSelector<ClassStateModel>('classes');
export const selectAllClasses = createSelector(
  selectClassesState,
  (state: ClassStateModel) => state.classes
);

export const selectClassDetails = createSelector(
  selectClassesState,
  (state: ClassStateModel) => state.classDetails
);

export const selectClassById = (index: string) => createSelector(
  selectClassesState,
  (state: ClassStateModel) => state.classDetails.find(race => race.index === index)
);

