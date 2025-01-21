import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { RaceService } from '../../services/race.service';
import { racesActions } from './race.actions'
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { SubraceService } from '../../services/subrace.service';
import { draftCharacterActions } from '../draft-character-state/draft-character.actions';
import { draftCharacterInitialState } from '../draft-character-state/draft-character.reducer';

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

  raceGetOneByIdFromApi$ = createEffect((actions$ = inject(Actions), raceService = inject(RaceService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(racesActions.getRaceByIdFromApi),
      switchMap((action) => {
        return raceService.getRaceById(action.index).pipe(
          map((raceDetails) => {
            store.dispatch(draftCharacterActions.getSelectedRace({selectedRace: raceDetails}));
            store.dispatch(draftCharacterActions.getRaceAbilityBonuses({abilityBonuses: raceDetails.ability_bonuses}));
            return racesActions.getRaceSuccess({ raceDetails });
          }),
        );
      }),
    )
  });

  raceGetOneFromStore$ = createEffect((actions$ = inject(Actions), store = inject(Store)) => {
    return actions$.pipe(
      ofType(racesActions.getRaceFromStore),
      switchMap((action) => {
        store.dispatch(draftCharacterActions.getSelectedRace({selectedRace: action.raceDetails}));
        store.dispatch(draftCharacterActions.getSubraceAbilityBonuses({abilityBonuses: draftCharacterInitialState.abilityBonuses}));
        store.dispatch(draftCharacterActions.getRaceAbilityBonuses({abilityBonuses: action.raceDetails.ability_bonuses}));
        return of(racesActions.getRaceSuccess({ raceDetails: action.raceDetails }));
      }),
    )
  });

  subraceGetOneById$ = createEffect((actions$ = inject(Actions), subraceService = inject(SubraceService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(racesActions.getSubraceById),
      switchMap(action =>
        subraceService.getSubraceById(action.index).pipe(
          map((subraces) => {
            store.dispatch(draftCharacterActions.getSubraceAbilityBonuses({abilityBonuses: subraces.ability_bonuses}));
            return racesActions.getSubraceSuccess({ subraces: subraces });
          }),
        )
      ),
    );
  });
}
