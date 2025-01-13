import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Race, RaceDetails } from '../../models/race.model';
import { Subrace } from '../../models/subrace.model';

export const racesActions = createActionGroup({
  source: 'Races',
  events: {
    'Get All Races': emptyProps(),
    'Get All Races Success': props<{ races: Race[] }>(),
    'Get All Races Failure': props<{ error: any }>(),

    'Get Race By Id': props<{ index: string }>(),
    'Get Race Success': props<{ raceDetails: RaceDetails }>(),
    'Get Race Failure': props<{ error: any }>(),

    'Get Subrace By Id': props<{ index: string }>(),
    'Get Subrace Success': props<{ subraces: Subrace }>(),
    'Get Subrace Failure': props<{ error: any }>(),
  },
});
