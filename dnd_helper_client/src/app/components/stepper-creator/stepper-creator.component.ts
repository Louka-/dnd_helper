import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RaceSelectorComponent } from '../race-selector/race-selector.component';
import { ClassSelectorComponent } from '../class-selector/class-selector.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'stepper-creator',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RaceSelectorComponent,
    ClassSelectorComponent,
  ],
  templateUrl: './stepper-creator.component.html',
  styleUrl: './stepper-creator.component.scss'
})
export class StepperCreatorComponent  {
  @Output('step') step = new EventEmitter<number>();
  @Output('raceToDisplay') raceToDisplay = new EventEmitter<string>();
  @Output('classToDisplay') classToDisplay = new EventEmitter<string>();
  currentStep: number = 0;

  private _formBuilder = inject(FormBuilder);

  //characterFormBuilder
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  onStepChange(event: StepperSelectionEvent): void {
    this.currentStep = event.selectedIndex;
    this.step.emit(event.selectedIndex);
  }

  onRaceToDisplay(r: string): void {
    this.raceToDisplay.emit(r);
  }

  onClassToDisplay(c: string): void {
    this.classToDisplay.emit(c);
  }
}
