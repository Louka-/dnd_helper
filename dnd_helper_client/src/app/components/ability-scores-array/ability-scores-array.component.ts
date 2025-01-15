import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityScoresSelectorComponent } from '../ability-scores-selector/ability-scores-selector.component';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentAbilityBonuses } from '../../store/draft-character-state/draft-character.selectors';

@Component({
  selector: 'ability-scores-array',
  standalone: true,
  imports: [CommonModule, AbilityScoresSelectorComponent],
  templateUrl: './ability-scores-array.component.html',
  styleUrl: './ability-scores-array.component.scss'
})
export class AbilityScoresArrayComponent implements OnInit  {
  @Input() racialBonus = 0;
  @Input() selectedRace: string = '';
  store = inject(Store);
  abilityBonuses$!: Observable<AbilityBonus[]>

  totalPoints = 27;

  ngOnInit(): void {
    this.abilityBonuses$ = this.store.select(selectCurrentAbilityBonuses);
  }

  increment() {
    this.totalPoints++
  }

  decrement() {
    if (this.totalPoints !== 0) {
      this.totalPoints--;
    }
  }

}
