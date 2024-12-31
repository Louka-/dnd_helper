import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { Race, RaceDetails } from '../../models/race.model';
import { Store } from '@ngrx/store';
import { racesActions } from '../../store/race-state/race.actions';
import { selectAllRaces, selectRaceById } from '../../store/race-state/race.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'character-creator',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.scss'
})
export class CharacterCreatorComponent implements OnInit {

  private store = inject(Store)
  races$: Observable<Race[]> = this.store.select(selectAllRaces);
  selectedRace = '';
  raceDetails$!: Observable<RaceDetails>;

  constructor() { }

  ngOnInit(): void {
    this.store.dispatch(racesActions.getAllRaces());
  }

  getRaceById(): void {
    this.store.dispatch(racesActions.getRaceById({ index: this.selectedRace }));
    this.raceDetails$ = this.store.select(selectRaceById(this.selectedRace)) as Observable<RaceDetails>
  }
}
