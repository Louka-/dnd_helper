import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ClassService } from '../../services/class.service';
import { classesActions } from './class.actions'
import { select, Store } from '@ngrx/store';
import { selectClassById } from './class.selectors';
import { of } from 'rxjs';

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

  classGetOneById$ = createEffect((actions$ = inject(Actions), classService = inject(ClassService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(classesActions.getClassById),
      switchMap((action) => {
        return store.pipe(
          select(selectClassById(action.index)),
          switchMap((c) => {
            if (c) {
              return of(classesActions.getClassSuccess({ classDetails: c }));
            } else {
              return classService.getClassById(action.index).pipe(
                map((classDetails) => classesActions.getClassSuccess({ classDetails })),
                catchError((error) => of(classesActions.getClassFailure({ error })))
              );
            }
          })
        );
      })
    )
  }
  );
}
