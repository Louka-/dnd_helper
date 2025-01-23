import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, take } from 'rxjs';
import { Class, ClassDetails } from '../../models/class.model';
import { classesActions } from '../../store/class-state/class.actions';
import { selectAllClasses, selectClassById, selectClassDetails } from '../../store/class-state/class.selectors';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'class-selector',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './class-selector.component.html',
  styleUrl: './class-selector.component.scss'
})
export class ClassSelectorComponent implements OnInit {
  @Output('classToDisplay') classToDisplay = new EventEmitter<Observable<ClassDetails>>();
  private store = inject(Store);
  classes$: Observable<Class[]> = this.store.select(selectAllClasses);
  classDetails$!: Observable<ClassDetails>;
  selectedClass = '';

  ngOnInit(): void {
    this.store.dispatch(classesActions.getAllClasses());
  }

  getClassById(): void {
    combineLatest({
      classDetails: this.store.select(selectClassDetails),
      c: this.store.select(selectClassById(this.selectedClass))
    }).pipe(
      take(1),
      map(({classDetails, c}) => {
        const isAvailableCurrentClass = c && classDetails.some(storedClasses =>  storedClasses.index === this.selectedClass);
        const currentClass = classDetails.find(storedClasses =>  storedClasses.index === this.selectedClass);
        if(isAvailableCurrentClass) {
          this.store.dispatch(classesActions.getClassFromStore({ classDetails: currentClass as ClassDetails }),
        )
      } else {
          this.store.dispatch(classesActions.getClassByIdFromApi({ index: this.selectedClass }));
        }
      })
    ).subscribe()
    this.classDetails$ = this.store.select(selectClassById(this.selectedClass)) as Observable<ClassDetails>;
    this.classToDisplay.emit(this.classDetails$);
  }
}
