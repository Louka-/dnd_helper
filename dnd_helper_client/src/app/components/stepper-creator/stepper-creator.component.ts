import { Component, EventEmitter, Output } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RaceSelectorComponent } from '../race-selector/race-selector.component';
import { ClassSelectorComponent } from '../class-selector/class-selector.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Observable } from 'rxjs';
import { RaceDetails } from '../../models/race.model';
import { ClassDetails } from '../../models/class.model';
import { CommonModule } from '@angular/common';
import { BackgroundDetails } from '../../models/background.model';
import { BackgroundSelectorComponent } from '../background-selector/background-selector.component';

@Component({
  selector: 'stepper-creator',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RaceSelectorComponent,
    ClassSelectorComponent,
    BackgroundSelectorComponent,
  ],
  templateUrl: './stepper-creator.component.html',
  styleUrl: './stepper-creator.component.scss'
})
export class StepperCreatorComponent  {
  @Output('step') step = new EventEmitter<number>();
  @Output('raceToDisplay') raceToDisplay = new EventEmitter<Observable<RaceDetails>>();
  @Output('classToDisplay') classToDisplay = new EventEmitter<Observable<ClassDetails>>();
  @Output('backgroundToDisplay') backgroundToDisplay = new EventEmitter<Observable<BackgroundDetails>>();
  raceDetails$!: Observable<RaceDetails>;
  classDetails$!: Observable<ClassDetails>;
  backgroundDetails$!: Observable<BackgroundDetails>;
  currentStep: number = 0;

  onStepChange(event: StepperSelectionEvent): void {
    this.currentStep = event.selectedIndex;
    this.step.emit(event.selectedIndex);
  }

  onRaceToDisplay(r: Observable<RaceDetails>): void {
    this.raceDetails$ = r;
    this.raceToDisplay.emit(r);
  }

  onClassToDisplay(c: Observable<ClassDetails>): void {
    this.classDetails$ = c;
    this.classToDisplay.emit(c);
  }

  onBackgroundToDisplay(b: Observable<BackgroundDetails>): void {
    this.backgroundDetails$ = b;
    this.backgroundToDisplay.emit(b);
  }
}
