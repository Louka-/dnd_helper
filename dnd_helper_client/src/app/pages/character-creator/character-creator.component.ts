import { Store } from '@ngrx/store';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { StepperCreatorComponent } from '../../components/stepper-creator/stepper-creator.component';
import { RaceDescriptionComponent } from '../../components/race-description/race-description.component';
import { selectRaceById } from '../../store/race-state/race.selectors';
import { RaceDetails } from '../../models/race.model';
import { Observable } from 'rxjs';
import { ClassDetails } from '../../models/class.model';
import { selectClassById } from '../../store/class-state/class.selectors';
import { ClassDescriptionComponent } from '../../components/class-description/class-description.component';

@Component({
  selector: 'character-creator',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    StepperCreatorComponent,
    RaceDescriptionComponent,
    ClassDescriptionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.scss'
})
export class CharacterCreatorComponent {
  private store = inject(Store)
  step = 0;
  raceToDisplay$!: Observable<RaceDetails>;
  classToDisplay$!: Observable<ClassDetails>;

  changeStep(event: number) {
    if(event > this.step) {
      ++this.step
    }
    if(event < this.step) {
      --this.step
    }
  }

  displayRaceDetails(r: string) {
    this.raceToDisplay$ = this.store.select(selectRaceById(r)) as Observable<RaceDetails>;
  }

  displayClassDetails(c: string) {
    this.classToDisplay$ = this.store.select(selectClassById(c)) as Observable<ClassDetails>;
  }
}
