// BackgroundService
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { draftCharacterActions } from '../draft-character-state/draft-character.actions';
import { BackgroundService } from '../../services/background.service';
import { backgroundsActions } from './background.actions';

@Injectable()
export class BackgroundEffects {

  backgroundsGetAll$ = createEffect(
    (actions$ = inject(Actions), backgroundService = inject(BackgroundService)) => {
      return actions$.pipe(
        ofType(backgroundsActions.getAllBackgrounds),
        switchMap(() => backgroundService.getAllBackgrounds()),
        map((backgrounds) => backgroundsActions.getAllBackgroundsSuccess({ backgrounds }))
      );
    },
  );

  backgroundGetOneByIdFromApi$ = createEffect((actions$ = inject(Actions), backgroundService = inject(BackgroundService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(backgroundsActions.getBackgroundByIdFromApi),
      switchMap((action) => {
        return backgroundService.getBackgroundById(action.index).pipe(
          map((backgroundDetails) => {
            store.dispatch(draftCharacterActions.getSelectedBackground({selectedBackground: backgroundDetails}));
            return backgroundsActions.getBackgroundSuccess({ backgroundDetails });
          }),
        );
      })
    )
  });

  backgroundGetOneFromStore$ = createEffect((actions$ = inject(Actions), store = inject(Store)) => {
    return actions$.pipe(
      ofType(backgroundsActions.getBackgroundFromStore),
      switchMap((action) => {
        store.dispatch(draftCharacterActions.getSelectedBackground({selectedBackground: action.backgroundDetails}));
        return of(backgroundsActions.getBackgroundSuccess({ backgroundDetails: action.backgroundDetails }));
      })
    )
  });
}
