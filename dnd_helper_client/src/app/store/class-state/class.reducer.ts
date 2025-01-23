import { createReducer, on } from '@ngrx/store';
import { classesActions } from './class.actions';
import { Class, ClassDetails } from '../../models/class.model';

export interface ClassState {
  classes: Class[];
  classDetails: ClassDetails[];
};

export const classInitialState: ClassState = {
  classes: [],
  classDetails: [],
};

export const classReducer = createReducer(
  classInitialState,
  on(classesActions.getAllClasses, (state) => ({ ...state })),
  on(classesActions.getAllClassesSuccess, (state, { classes }) => ({ ...state, classes: classes })),
  on(classesActions.getClassByIdFromApi, (state) => ({ ...state })),
  on(classesActions.getClassFromStore, (state) => ({ ...state })),
  on(classesActions.getClassSuccess, (state, { classDetails }) => ({
    ...state, classDetails:
      (state.classDetails.some(storedClass => storedClass.index === classDetails.index) && state.classDetails.length !== 0)
        ? state.classDetails
        : [...state.classDetails, classDetails]
  })),
);

