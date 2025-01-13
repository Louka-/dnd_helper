import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityScoresSelectorComponent } from '../ability-scores-selector/ability-scores-selector.component';
import { AbilityBonus } from '../../models/ability-bonus.model';

@Component({
  selector: 'ability-scores-array',
  standalone: true,
  imports: [CommonModule, AbilityScoresSelectorComponent],
  templateUrl: './ability-scores-array.component.html',
  styleUrl: './ability-scores-array.component.scss'
})
export class AbilityScoresArrayComponent  {
  @Input() racialBonus = 0;
  @Input() abilityBonus!: AbilityBonus[];
  completeAbilities = [
    { ability_score: 'STR', bonus: 0 },
    { ability_score: 'CON', bonus: 0 },
    { ability_score: 'DEX', bonus: 0 },
    { ability_score: 'IIN', bonus: 0 },
    { ability_score: 'WIS', bonus: 0 },
    { ability_score: 'CHA', bonus: 0 }
  ] as AbilityBonus[];
  totalPoints = 27;

    get abilitiesWithDefaults() {
      return this.completeAbilities.map(ability => {
        const existingAbility = this.abilityBonus.find(a => a.ability_score === ability.ability_score);
        return existingAbility ? existingAbility : ability;
      });
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
