import { createReducer, on } from '@ngrx/store';
import { classesActions } from './class.actions';
import { Class, ClassDetails } from '../../models/class.model';

export interface State {
  classes: Class[];
  classDetails: ClassDetails[];
};

export const initialState: State = {
  classes: [],
  classDetails: [],
};

export const classReducer = createReducer(
  initialState,
  on(classesActions.getAllClasses, (state) => ({ ...state })),
  on(classesActions.getAllClassesSuccess, (state, { classes }) => ({ ...state, classes: classes })),
  on(classesActions.getClassById, (state) => ({ ...state })),
  on(classesActions.getClassSuccess, (state, { classDetails }) => ({
    ...state, classDetails:
      (state.classDetails.some(storedRace => storedRace.index === classDetails.index) && state.classDetails.length !== 0)
        ? state.classDetails
        : [...state.classDetails, classDetails]
  })),
);

