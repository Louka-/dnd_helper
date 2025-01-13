import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { Race, RaceDetails } from '../../models/race.model';
import { selectAllRaces, selectRaceById, selectRaceDetails, selectSubracesByRaceId } from '../../store/race-state/race.selectors';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { racesActions } from '../../store/race-state/race.actions';
import { CommonModule } from '@angular/common';
import { Subrace } from '../../models/subrace.model';
import { AbilityBonus } from '../../models/ability-bonus.model';

@Component({
  selector: 'race-selector',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule,],
  templateUrl: './race-selector.component.html',
  styleUrl: './race-selector.component.scss'
})
export class RaceSelectorComponent implements OnInit {
  private store = inject(Store);
  @Output('raceToDisplay') raceToDisplay = new EventEmitter<string>();
  races$: Observable<Race[]> = this.store.select(selectAllRaces);
  raceDetails$!: Observable<RaceDetails>;
  subraces$!: Observable<Subrace[]>;
  abilityBonus!: AbilityBonus[];
  selectedRace = '';

  ngOnInit(): void {
    this.store.dispatch(racesActions.getAllRaces());
  }

  getRaceById(): void {
    this.store.select(selectRaceDetails).pipe(
      map(raceDetails => {
        if(!raceDetails.some(storedRaces =>  storedRaces.index === this.selectedRace)) {
          this.store.dispatch(racesActions.getRaceById({ index: this.selectedRace }));
        }
      })
    ).subscribe()
    this.raceDetails$ = this.store.select(selectRaceById(this.selectedRace)) as Observable<RaceDetails>;
    this.raceToDisplay.emit(this.selectedRace);
  }

  getBonuses() {
    this.subraces$ = this.store.select(selectSubracesByRaceId(this.selectedRace)) as Observable<Subrace[]>;
    combineLatest({
      raceDetails: this.raceDetails$,
      subraces: this.subraces$,
    }).pipe(
      map(({ raceDetails, subraces }) => {
        const raceAbilityBonuses = raceDetails.ability_bonuses.map(bonus =>({
            ability_score: bonus.ability_score.name,
            bonus: bonus.bonus
          })
        );

        const subraceAbilityBonuses = subraces ? subraces.flatMap(subrace =>
          subrace.ability_bonuses.flatMap(bonus =>({
              ability_score: bonus.ability_score.name,
              bonus: bonus.bonus
            })
          )
        ) : [];
        this.abilityBonus = [...raceAbilityBonuses, ...subraceAbilityBonuses];
      })
    ).subscribe();
  }
}
