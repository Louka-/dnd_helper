import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { draftCharacterActions } from '../../store/draft-character-state/draft-character.actions';

@Component({
  selector: 'ability-scores-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './ability-scores-selector.component.html',
  styleUrl: './ability-scores-selector.component.scss'
})
export class AbilityScoresSelectorComponent implements OnInit  {
  private store = inject(Store);
  @Input() racialBonus = 0;
  @Input() abilityScore = 0;
  @Input() abilityName = '';
  @Input() abilityIndex = '';
  @Input() disableAddButton = false;
  @Input() finalScore = 8;
  @Output() addPointEvent = new EventEmitter();
  @Output() removePointEvent = new EventEmitter();
  minValue: number = 8;
  maxValue: number = 20;

  ngOnInit(): void {
    this.finalScore = this.abilityScore + this.racialBonus;
  }

  increment(abilityIndex: string) {
    if (this.finalScore < this.maxValue || this.disableAddButton) {
      this.store.dispatch(draftCharacterActions.increaseAbilityBonus({ index: abilityIndex }));
      this.abilityScore++;
      this.removePointEvent.emit();
      this.updateFinalScore();
    }
  }

  decrement(abilityIndex: string) {
    if (this.finalScore > this.minValue) {
      this.store.dispatch(draftCharacterActions.decreaseAbilityBonus({ index: abilityIndex }));
      this.abilityScore--;
      this.addPointEvent.emit();
      this.updateFinalScore();
    }
  }

  private updateFinalScore() {
    this.finalScore = this.abilityScore + this.racialBonus;
  }
}
