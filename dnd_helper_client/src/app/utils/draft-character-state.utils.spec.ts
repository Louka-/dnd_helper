import DraftCharacterStateUtils from './draft-character-state.utils';
import { DraftCharacterState, draftCharacterInitialState } from '../store/draft-character-state/draft-character.reducer';
import { AbilityBonus } from '../models/ability-bonus.model';

describe('DraftCharacterStateUtils', () => {
  const mockState: DraftCharacterState = {
    ...draftCharacterInitialState,
    abilityBonuses: [
      { ability_score: { index: 'str', name: 'STR', url: '' }, bonus: 2 },
      { ability_score: { index: 'con', name: 'CON', url: '' }, bonus: 3 },
      { ability_score: { index: 'dex', name: 'DEX', url: '' }, bonus: 1 },
      { ability_score: { index: 'int', name: 'INT', url: '' }, bonus: 4 },
      { ability_score: { index: 'wis', name: 'WIS', url: '' }, bonus: 5 },
      { ability_score: { index: 'cha', name: 'CHA', url: '' }, bonus: 6 },
    ],
  };

  it('should calculate initial strength with racial bonuses', () => {
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialStrengthWithRacialBonuses(mockState);
    expect(result.bonus).toBe(mockState.strAbilityBonus.bonus + 2);
  });

  it('should calculate initial constitution with racial bonuses', () => {
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialConstitutionWithRacialBonuses(mockState);
    expect(result.bonus).toBe(mockState.conAbilityBonus.bonus + 3);
  });

  it('should calculate initial dexterity with racial bonuses', () => {
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialDexterityWithRacialBonuses(mockState);
    expect(result.bonus).toBe(mockState.dexAbilityBonus.bonus + 1);
  });

  it('should calculate initial intelligence with racial bonuses', () => {
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialIntelligenceWithRacialBonuses(mockState);
    expect(result.bonus).toBe(mockState.intAbilityBonus.bonus + 4);
  });

  it('should calculate initial wisdom with racial bonuses', () => {
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialWisdomWithRacialBonuses(mockState);
    expect(result.bonus).toBe(mockState.wisAbilityBonus.bonus + 5);
  });

  it('should calculate initial charisma with racial bonuses', () => {
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialCharismaWithRacialBonuses(mockState);
    expect(result.bonus).toBe(mockState.chaAbilityBonus.bonus + 6);
  });

  it('should return initial strength bonus if no racial bonus is found', () => {
    const stateWithoutStrBonus: DraftCharacterState = {
      ...mockState,
      abilityBonuses: mockState.abilityBonuses.filter(bonus => bonus.ability_score.index !== 'str'),
    };
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialStrengthWithRacialBonuses(stateWithoutStrBonus);
    expect(result).toBe(draftCharacterInitialState.strAbilityBonus);
  });

  it('should return initial constitution bonus if no racial bonus is found', () => {
    const stateWithoutConBonus: DraftCharacterState = {
      ...mockState,
      abilityBonuses: mockState.abilityBonuses.filter(bonus => bonus.ability_score.index !== 'con'),
    };
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialConstitutionWithRacialBonuses(stateWithoutConBonus);
    expect(result).toBe(draftCharacterInitialState.conAbilityBonus);
  });

  it('should return initial dexterity bonus if no racial bonus is found', () => {
    const stateWithoutDexBonus: DraftCharacterState = {
      ...mockState,
      abilityBonuses: mockState.abilityBonuses.filter(bonus => bonus.ability_score.index !== 'dex'),
    };
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialDexterityWithRacialBonuses(stateWithoutDexBonus);
    expect(result).toBe(draftCharacterInitialState.dexAbilityBonus);
  });

  it('should return initial intelligence bonus if no racial bonus is found', () => {
    const stateWithoutIntBonus: DraftCharacterState = {
      ...mockState,
      abilityBonuses: mockState.abilityBonuses.filter(bonus => bonus.ability_score.index !== 'int'),
    };
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialIntelligenceWithRacialBonuses(stateWithoutIntBonus);
    expect(result).toBe(draftCharacterInitialState.intAbilityBonus);
  });

  it('should return initial wisdom bonus if no racial bonus is found', () => {
    const stateWithoutWisBonus: DraftCharacterState = {
      ...mockState,
      abilityBonuses: mockState.abilityBonuses.filter(bonus => bonus.ability_score.index !== 'wis'),
    };
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialWisdomWithRacialBonuses(stateWithoutWisBonus);
    expect(result).toBe(draftCharacterInitialState.wisAbilityBonus);
  });

  it('should return initial charisma bonus if no racial bonus is found', () => {
    const stateWithoutChaBonus: DraftCharacterState = {
      ...mockState,
      abilityBonuses: mockState.abilityBonuses.filter(bonus => bonus.ability_score.index !== 'cha'),
    };
    const result: AbilityBonus = DraftCharacterStateUtils.getInitialCharismaWithRacialBonuses(stateWithoutChaBonus);
    expect(result).toBe(draftCharacterInitialState.chaAbilityBonus);
  });
});
