import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Class, ClassDetails } from '../../models/class.model';
import { classesActions } from '../../store/class-state/class.actions';
import { selectAllClasses, selectClassById } from '../../store/class-state/class.selectors';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'class-selector',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './class-selector.component.html',
  styleUrl: './class-selector.component.scss'
})
export class ClassSelectorComponent implements OnInit {
  @Output('classToDisplay') classToDisplay = new EventEmitter<string>();
  private store = inject(Store);
  classes$: Observable<Class[]> = this.store.select(selectAllClasses);
  classDetails$!: Observable<ClassDetails>;
  selectedClass = '';

  ngOnInit(): void {
    this.store.dispatch(classesActions.getAllClasses());
  }

  getClassById(): void {
    this.store.dispatch(classesActions.getClassById({ index: this.selectedClass }));
    this.classDetails$ = this.store.select(selectClassById(this.selectedClass)) as Observable<ClassDetails>;
    this.classToDisplay.emit(this.selectedClass);
  }
}
