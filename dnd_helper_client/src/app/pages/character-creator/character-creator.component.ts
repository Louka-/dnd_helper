import { Store } from '@ngrx/store';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { StepperCreatorComponent } from '../../components/stepper-creator/stepper-creator.component';
import { RaceDescriptionComponent } from '../../components/race-description/race-description.component';
import { RaceDetails } from '../../models/race.model';
import { map, Observable, tap } from 'rxjs';
import { ClassDetails } from '../../models/class.model';
import { ClassDescriptionComponent } from '../../components/class-description/class-description.component';
import { AbilityScoresArrayComponent } from '../../components/ability-scores-array/ability-scores-array.component';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { racesActions } from '../../store/race-state/race.actions';

@Component({
  selector: 'character-creator',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    StepperCreatorComponent,
    RaceDescriptionComponent,
    ClassDescriptionComponent,
    AbilityScoresArrayComponent
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
  abilityBonusesToDispatch$!: AbilityBonus[];

  changeStep(event: number) {
    if(event > this.step) {
      ++this.step
    }
    if(event < this.step) {
      --this.step
    }
  }

  displayRaceDetails(r: Observable<RaceDetails>) {
    this.raceToDisplay$ = r;
  }

  displayClassDetails(c: Observable<ClassDetails>) {
    this.classToDisplay$ = c;
  }

  dispatchAbilityBonuses(aB: AbilityBonus[]) {
    this.abilityBonusesToDispatch$ = aB;
  }

  button() {
    this.raceToDisplay$.pipe(
      tap((race) => console.log(race)),
      map(race => this.store.dispatch(racesActions.getSubraceById({index: race.subraces?.[0].index as string})))
    ).subscribe()
  }
}
