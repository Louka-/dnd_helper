import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityScoresSelectorComponent } from '../ability-scores-selector/ability-scores-selector.component';
import { AbilityScore } from '../../models/ability-bonus.model';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { selectAvailablePoints, selectChaAbilityBonus, selectConAbilityBonus, selectCurrentAbilityBonuses, selectDexAbilityBonus, selectIntAbilityBonus, selectStrAbilityBonus, selectWisAbilityBonus } from '../../store/draft-character-state/draft-character.selectors';
import { draftCharacterActions } from '../../store/draft-character-state/draft-character.actions';

@Component({
  selector: 'ability-scores-array',
  standalone: true,
  imports: [CommonModule, AbilityScoresSelectorComponent],
  templateUrl: './ability-scores-array.component.html',
  styleUrl: './ability-scores-array.component.scss'
})
export class AbilityScoresArrayComponent implements OnInit  {
  store = inject(Store);
  strAbilityBonus$!: Observable<{ racialBonus: number; ability_score: AbilityScore; abilityMod: string; bonus: number; }>;
  conAbilityBonus$!: Observable<{ racialBonus: number; ability_score: AbilityScore; abilityMod: string; bonus: number; }>;
  dexAbilityBonus$!: Observable<{ racialBonus: number; ability_score: AbilityScore; abilityMod: string; bonus: number; }>;
  intAbilityBonus$!: Observable<{ racialBonus: number; ability_score: AbilityScore; abilityMod: string; bonus: number; }>;
  wisAbilityBonus$!: Observable<{ racialBonus: number; ability_score: AbilityScore; abilityMod: string; bonus: number; }>;
  chaAbilityBonus$!: Observable<{ racialBonus: number; ability_score: AbilityScore; abilityMod: string; bonus: number; }>;

  availablePoints$: Observable<number> = this.store.select(selectAvailablePoints);

  ngOnInit(): void {
    this.strAbilityBonus$ = combineLatest({
      racialAbilityBonuses: this.store.select(selectCurrentAbilityBonuses),
      strAbilityBonus: this.store.select(selectStrAbilityBonus),
    }).pipe(
      map(({racialAbilityBonuses, strAbilityBonus}) => {
          const matchingItem = racialAbilityBonuses.find(secondItem => {
            console.log('secondItem', secondItem)
            console.log('strAbilityBonus', strAbilityBonus)
            secondItem.ability_score.name === strAbilityBonus.ability_score.name
          });
          return {
            ...strAbilityBonus,
            racialBonus: matchingItem ? matchingItem.bonus : 0,
            abilityMod: this.getBonusCaracteristique(strAbilityBonus.bonus),
          };
      }),
    );

    this.conAbilityBonus$ = combineLatest({
      racialAbilityBonuses: this.store.select(selectCurrentAbilityBonuses),
      conAbilityBonus: this.store.select(selectConAbilityBonus),
    }).pipe(
      map(({racialAbilityBonuses, conAbilityBonus}) => {
          const matchingItem = racialAbilityBonuses.find(secondItem => secondItem.ability_score.name === conAbilityBonus.ability_score.name);
          return {
            ...conAbilityBonus,
            racialBonus: matchingItem ? matchingItem.bonus : 0,
            abilityMod: this.getBonusCaracteristique(conAbilityBonus.bonus),
          };
      }),
    );

    this.dexAbilityBonus$ = combineLatest({
      racialAbilityBonuses: this.store.select(selectCurrentAbilityBonuses),
      dexAbilityBonus: this.store.select(selectDexAbilityBonus),
    }).pipe(
      map(({racialAbilityBonuses, dexAbilityBonus}) => {
          const matchingItem = racialAbilityBonuses.find(secondItem => secondItem.ability_score.name === dexAbilityBonus.ability_score.name);
          return {
            ...dexAbilityBonus,
            racialBonus: matchingItem ? matchingItem.bonus : 0,
            abilityMod: this.getBonusCaracteristique(dexAbilityBonus.bonus),
          };
      }),
    );

    this.intAbilityBonus$ = combineLatest({
      racialAbilityBonuses: this.store.select(selectCurrentAbilityBonuses),
      intAbilityBonus: this.store.select(selectIntAbilityBonus),
    }).pipe(
      map(({racialAbilityBonuses, intAbilityBonus}) => {
          const matchingItem = racialAbilityBonuses.find(secondItem => secondItem.ability_score.name === intAbilityBonus.ability_score.name);
          return {
            ...intAbilityBonus,
            racialBonus: matchingItem ? matchingItem.bonus : 0,
            abilityMod: this.getBonusCaracteristique(intAbilityBonus.bonus),
          };
      }),
    );

    this.wisAbilityBonus$ = combineLatest({
      racialAbilityBonuses: this.store.select(selectCurrentAbilityBonuses),
      wisAbilityBonus: this.store.select(selectWisAbilityBonus),
    }).pipe(
      map(({racialAbilityBonuses, wisAbilityBonus}) => {
          const matchingItem = racialAbilityBonuses.find(secondItem => secondItem.ability_score.name === wisAbilityBonus.ability_score.name);
          return {
            ...wisAbilityBonus,
            racialBonus: matchingItem ? matchingItem.bonus : 0,
            abilityMod: this.getBonusCaracteristique(wisAbilityBonus.bonus),
          };
      }),
    );

    this.chaAbilityBonus$ = combineLatest({
      racialAbilityBonuses: this.store.select(selectCurrentAbilityBonuses),
      chaAbilityBonus: this.store.select(selectChaAbilityBonus),
    }).pipe(
      map(({racialAbilityBonuses, chaAbilityBonus}) => {
          const matchingItem = racialAbilityBonuses.find(secondItem => secondItem.ability_score.name === chaAbilityBonus.ability_score.name);
          return {
            ...chaAbilityBonus,
            racialBonus: matchingItem ? matchingItem.bonus : 0,
            abilityMod: this.getBonusCaracteristique(chaAbilityBonus.bonus),
          };
      }),
    );
  }

  increment(): void {
    this.store.dispatch(draftCharacterActions.increaseAbilityPoints());
  }

  decrement(): void {
    this.store.dispatch(draftCharacterActions.decreaseAbilityPoints());
  }

  resetAvailablePoints(): void {
    this.store.dispatch(draftCharacterActions.resetAbilityPoints());
  }

  getBonusCaracteristique(score: number): string {
    const bonus = Math.floor((score - 10) / 2);
    return (bonus >= 0 ? `(+${bonus})` : `(${bonus})`);
  }

}
