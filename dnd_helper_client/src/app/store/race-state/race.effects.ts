import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RaceService } from '../../services/race.service';
import { racesActions } from './race.actions'
import { select, Store } from '@ngrx/store';
import { selectRaceById, selectRaceDetails } from './race.selectors';
import { of } from 'rxjs';

@Injectable()
export class RaceEffects {

  racesGetAll$ = createEffect(
    (actions$ = inject(Actions), raceService = inject(RaceService)) => {
      return actions$.pipe(
        ofType(racesActions.getAllRaces),
        switchMap(() => raceService.getAllRaces()),
        map((races) => racesActions.getAllRacesSuccess({ races }))
      );
    },
  );

  raceGetOneById$ = createEffect((actions$ = inject(Actions), raceService = inject(RaceService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(racesActions.getRaceById),
      switchMap((action) => {
        return store.pipe(
          select(selectRaceById(action.index)),
          switchMap((race) => {
            if (race) {
              return of(racesActions.getRaceSuccess({ raceDetails: race }));
            } else {
              return raceService.getRaceById(action.index).pipe(
                map((raceDetails) => racesActions.getRaceSuccess({ raceDetails })),
                catchError((error) => of(racesActions.getRaceFailure({ error })))
              );
            }
          })
        );
      })
    )
  }
  );

}


