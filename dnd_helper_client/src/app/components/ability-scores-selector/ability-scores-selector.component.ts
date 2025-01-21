import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
export class AbilityScoresSelectorComponent  {
  private store = inject(Store);
  @Input() racialBonus = 0;
  @Input() abilityScore = 0;
  @Input() abilityName = '';
  @Input() abilityIndex = '';
  @Input() disableAddButton = false;
  @Input() abilityMod: string = '';
  @Output() addPointEvent = new EventEmitter();
  @Output() removePointEvent = new EventEmitter();
  minValue: number = 8;
  maxValue: number = 20;

  increment(abilityIndex: string) {
    if (this.abilityScore < this.maxValue || this.disableAddButton) {
      this.store.dispatch(draftCharacterActions.increaseAbilityBonus({ index: abilityIndex }));
      this.abilityScore++;
      this.removePointEvent.emit();
    }
  }

  decrement(abilityIndex: string) {
    if (this.abilityScore > this.minValue) {
      this.store.dispatch(draftCharacterActions.decreaseAbilityBonus({ index: abilityIndex }));
      this.abilityScore--;
      this.addPointEvent.emit();
    }
  }

  getBonusCaracteristique(score: number): string {
    const bonus = Math.floor((score - 10) / 2);
    return (bonus >= 0 ? `(+${bonus})` : `(${bonus})`);
  }
}
