import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, take } from 'rxjs';
import { Race, RaceDetails } from '../../models/race.model';
import { selectAllRaces, selectRaceById, selectRaceDetails } from '../../store/race-state/race.selectors';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { racesActions } from '../../store/race-state/race.actions';
import { CommonModule } from '@angular/common';
import { Subrace } from '../../models/subrace.model';

@Component({
  selector: 'race-selector',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule,],
  templateUrl: './race-selector.component.html',
  styleUrl: './race-selector.component.scss',
})
export class RaceSelectorComponent implements OnInit {
  private store = inject(Store);
  @Output('raceToDisplay') raceToDisplay = new EventEmitter<Observable<RaceDetails>>();
  races$: Observable<Race[]> = this.store.select(selectAllRaces);
  raceDetails$!: Observable<RaceDetails>;
  subraces$!: Observable<Subrace[]>;
  selectedRace = '';
  selectedSubrace = '';

  ngOnInit(): void {
    this.store.dispatch(racesActions.getAllRaces());
  }

  getRaceById(): void {
    combineLatest({
      raceDetails: this.store.select(selectRaceDetails),
      race: this.store.select(selectRaceById(this.selectedRace)),
    }).pipe(
      take(1),
      map(({raceDetails, race}) => {
        const isAvailableCurrentRace = race && raceDetails.some(storedRaces =>  storedRaces.index === this.selectedRace);
        const currentRace = raceDetails.find(storedRaces =>  storedRaces.index === this.selectedRace);
        if(isAvailableCurrentRace) {
          this.store.dispatch(racesActions.getRaceFromStore({ raceDetails: currentRace as RaceDetails }));
      } else {
          this.store.dispatch(racesActions.getRaceByIdFromApi({ index: this.selectedRace }));
        }
      }),
    ).subscribe()
    this.raceDetails$ = this.store.select(selectRaceById(this.selectedRace)) as Observable<RaceDetails>;
    this.raceToDisplay.emit(this.raceDetails$);
  }

  getSubraceById(): void {
    this.store.dispatch(racesActions.getSubraceById({index: this.selectedSubrace}));
  }
}
