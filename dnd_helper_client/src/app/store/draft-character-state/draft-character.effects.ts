import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { draftCharacterActions } from './draft-character.actions';
import { draftCharacterInitialState } from './draft-character.reducer';
import { selectCurrentAbilityBonuses } from './draft-character.selectors';

@Injectable()
export class DraftCharacterEffects {

  raceGetSelected$ = createEffect(
    (actions$ = inject(Actions)) => {
      return actions$.pipe(
        ofType(draftCharacterActions.getSelectedRace),
        map((r) => draftCharacterActions.getSelectedRaceSuccess({ selectedRace: r.selectedRace }))
      );
    },
  );

  classGetSelected$ = createEffect(
    (actions$ = inject(Actions)) => {
      return actions$.pipe(
        ofType(draftCharacterActions.getSelectedClass),
        map((c) => draftCharacterActions.getSelectedClassSuccess({ selectedClass: c.selectedClass }))
      );
    },
  );

  backgroundGetSelected$ = createEffect(
    (actions$ = inject(Actions)) => {
      return actions$.pipe(
        ofType(draftCharacterActions.getSelectedBackground),
        map((b) => draftCharacterActions.getSelectedBackgroundSuccess({ selectedBackground: b.selectedBackground }))
      );
    },
  );

  raceAbilityBonusesGet$ = createEffect(
    (actions$ = inject(Actions), store = inject(Store)) => {
      return actions$.pipe(
        ofType(draftCharacterActions.getRaceAbilityBonuses),
        map((action) => {
          const updatedAbilityBonuses = draftCharacterInitialState.abilityBonuses.map(item => {
            const updatedItem = action.abilityBonuses.find(updated => updated.ability_score.index === item.ability_score.index);
            return updatedItem ? updatedItem : item;
        });
          action.abilityBonuses.map(abilityBonus => {
            switch(abilityBonus.ability_score.index) {
              case 'str': store.dispatch(draftCharacterActions.increaseStrenghtWithRacialBonuses({ abilityBonus: abilityBonus })); break;
              case 'con': store.dispatch(draftCharacterActions.increaseConstitutionWithRacialBonuses({ abilityBonus: abilityBonus })); break;
              case 'dex': store.dispatch(draftCharacterActions.increaseDexterityWithRacialBonuses({ abilityBonus: abilityBonus })); break;
              case 'int': store.dispatch(draftCharacterActions.increaseIntelligenceWithRacialBonuses({ abilityBonus: abilityBonus })); break;
              case 'wis': store.dispatch(draftCharacterActions.increaseWisdomWithRacialBonuses({ abilityBonus: abilityBonus })); break;
              case 'cha': store.dispatch(draftCharacterActions.increaseCharismaWithRacialBonuses({ abilityBonus: abilityBonus })); break;
              default: null
            }
          });
            return draftCharacterActions.getRaceAbilityBonusesSuccess({ abilityBonuses: updatedAbilityBonuses });
        })
      );
    },
  );

  subraceAbilityBonusesGet$ = createEffect(
    (actions$ = inject(Actions), store = inject(Store)) => {
      return actions$.pipe(
        ofType(draftCharacterActions.getSubraceAbilityBonuses),
        switchMap((action) => {
          return store.pipe(
            select(selectCurrentAbilityBonuses),
            take(1),
            switchMap(abilityBonuses => {
              const updatedAbilityBonuses = abilityBonuses.map(item => {
                const updatedItem = action.abilityBonuses.find(updated => updated.ability_score.index === item.ability_score.index);
                return updatedItem ? updatedItem : item;
              });
              action.abilityBonuses.map(abilityBonus => {
                switch(abilityBonus.ability_score.index) {
                  case 'str': store.dispatch(draftCharacterActions.increaseStrenghtWithRacialBonuses({ abilityBonus: abilityBonus })); break;
                  case 'con': store.dispatch(draftCharacterActions.increaseConstitutionWithRacialBonuses({ abilityBonus: abilityBonus })); break;
                  case 'dex': store.dispatch(draftCharacterActions.increaseDexterityWithRacialBonuses({ abilityBonus: abilityBonus })); break;
                  case 'int': store.dispatch(draftCharacterActions.increaseIntelligenceWithRacialBonuses({ abilityBonus: abilityBonus })); break;
                  case 'wis': store.dispatch(draftCharacterActions.increaseWisdomWithRacialBonuses({ abilityBonus: abilityBonus })); break;
                  case 'cha': store.dispatch(draftCharacterActions.increaseCharismaWithRacialBonuses({ abilityBonus: abilityBonus })); break;
                  default: null
                }
              });
              if (JSON.stringify(updatedAbilityBonuses) !== JSON.stringify(abilityBonuses)) {
                return of(draftCharacterActions.getSubraceAbilityBonusesSuccess({ abilityBonuses: updatedAbilityBonuses }));
              } else {
                return EMPTY;
              }
            })
          )
        })
      );
    },
  );
}
