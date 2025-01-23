import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Background, BackgroundDetails } from '../../models/background.model';

export const backgroundsActions = createActionGroup({
  source: 'Backgrounds',
  events: {
    'Get All Backgrounds': emptyProps(),
    'Get All Backgrounds Success': props<{ backgrounds: Background[] }>(),
    'Get All Backgrounds Failure': props<{ error: any }>(),

    'Get Background By Id From Api': props<{ index: string }>(),
    'Get Background From Store': props<{ backgroundDetails: BackgroundDetails }>(),
    'Get Background Success': props<{ backgroundDetails: BackgroundDetails }>(),
    'Get Background Failure': props<{ error: any }>()
  },
});
