import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'ability-scores-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './ability-scores-selector.component.html',
  styleUrl: './ability-scores-selector.component.scss'
})
export class AbilityScoresSelectorComponent implements OnInit  {
  @Input() racialBonus = 0;
  @Input() abilityName = '';
  @Input() disableAddButton = false;
  @Output() addPointEvent = new EventEmitter();
  @Output() removePointEvent = new EventEmitter();
  brutScore: number = 8;
  minValue: number = 8;
  maxValue: number = 20;
  finalScore: number = 8;

  ngOnInit(): void {
    this.finalScore =this.brutScore + this.racialBonus
  }

  increment() {
    if (this.finalScore < this.maxValue || this.disableAddButton) {
      this.brutScore++;
      this.removePointEvent.emit();
      this.updateFinalScore();
    }
  }

  decrement() {
    if (this.finalScore > this.minValue) {
      this.brutScore--;
      this.addPointEvent.emit();
      this.updateFinalScore();
    }
  }

  private updateFinalScore() {
    this.finalScore = this.brutScore + this.racialBonus;
  }
}
