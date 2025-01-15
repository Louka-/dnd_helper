import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ClassService } from '../../services/class.service';
import { classesActions } from './class.actions'
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { draftCharacterActions } from '../draft-character-state/draft-character.actions';

@Injectable()
export class ClassEffects {

  racesGetAll$ = createEffect(
    (actions$ = inject(Actions), classService = inject(ClassService)) => {
      return actions$.pipe(
        ofType(classesActions.getAllClasses),
        switchMap(() => classService.getAllClasses()),
        map((classes) => classesActions.getAllClassesSuccess({ classes }))
      );
    },
  );

  classGetOneByIdFromApi$ = createEffect((actions$ = inject(Actions), classService = inject(ClassService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(classesActions.getClassByIdFromApi),
      switchMap((action) => {
        return classService.getClassById(action.index).pipe(
          map((classDetails) => {
            store.dispatch(draftCharacterActions.getSelectedClass({selectedClass: classDetails}));
            return classesActions.getClassSuccess({ classDetails });
          }),
        );
      })
    )
  });

  classGetOneFromStore$ = createEffect((actions$ = inject(Actions), store = inject(Store)) => {
    return actions$.pipe(
      ofType(classesActions.getClassFromStore),
      switchMap((action) => {
        store.dispatch(draftCharacterActions.getSelectedClass({selectedClass: action.classDetails}));
        return of(classesActions.getClassSuccess({ classDetails: action.classDetails }));
      })
    )
  });
}
