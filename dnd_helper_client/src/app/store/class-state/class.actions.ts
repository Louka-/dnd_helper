import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Class, ClassDetails } from '../../models/class.model';

export const classesActions = createActionGroup({
  source: 'Classes',
  events: {
    'Get All Classes': emptyProps(),
    'Get All Classes Success': props<{ classes: Class[] }>(),
    'Get All Classes Failure': props<{ error: any }>(),

    'Get Class By Id': props<{ index: string }>(),
    'Get Class Success': props<{ classDetails: ClassDetails }>(),
    'Get Class Failure': props<{ error: any }>()
  },
});
