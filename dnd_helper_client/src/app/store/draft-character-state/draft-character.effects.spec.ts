import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { DraftCharacterEffects } from './draft-character.effects';
import { draftCharacterActions } from './draft-character.actions';
import { DraftCharacterState } from './draft-character.reducer';
import { cold, hot } from 'jest-marbles';
import { selectCurrentAbilityBonuses } from './draft-character.selectors';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { BackgroundDetails } from '../../models/background.model';
import { ClassDetails } from '../../models/class.model';
import { RaceDetails } from '../../models/race.model';

describe('Draft Character Effects', () => {
  let actions$: Observable<any>;
  let effects: DraftCharacterEffects;
  let store: MockStore;

  const initialState: DraftCharacterState = {
    selectedRace: {
          index: 'race1',
          name: 'Race 1',
          url: 'api/race',
          ability_bonuses: [],
          age: 'string',
          alignment: 'string',
          language_desc: 'string',
          languages: [],
          size: 'string',
          size_description: 'string',
          speed: 5,
          starting_proficiencies: [],
          starting_proficiency_options: undefined,
          subraces: [],
          traits: [],
        } as RaceDetails,
        selectedClass: {
          index: 'class1',
          name: 'Class 1',
          hit_die: 2,
          proficiency_choices: [],
          proficiencies: [],
          saving_throws: [],
          starting_equipment: [],
          starting_equipment_options: [],
          class_levels: 'string',
          subclasses: 'string',
          multi_classing: 'string',
          spellcasting: undefined,
          spells: 'string',
          url: 'string',
        } as ClassDetails,
        selectedBackground: {
          index: 'background1',
          name: 'Background 1',
          starting_proficiencies: [],
          language_options: [],
          starting_equipment: [],
          starting_equipment_options: [],
          url: 'api/backgrounds/background1',
        } as BackgroundDetails,
    abilityBonuses: [{ ability_score: { index: 'str', name: 'STR', url: '' }, bonus: 2 }] as AbilityBonus[],
    strAbilityBonus: { ability_score: { index: 'str', name: 'STR', url: '' }, bonus: 8 },
    conAbilityBonus: { ability_score: { index: 'con', name: 'CON', url: '' }, bonus: 8 },
    dexAbilityBonus: { ability_score: { index: 'dex', name: 'DEX', url: '' }, bonus: 8 },
    intAbilityBonus: { ability_score: { index: 'int', name: 'INT', url: '' }, bonus: 8 },
    wisAbilityBonus: { ability_score: { index: 'wis', name: 'WIS', url: '' }, bonus: 8 },
    chaAbilityBonus: { ability_score: { index: 'cha', name: 'CHA', url: '' }, bonus: 8 },
    availablePoints: 27,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DraftCharacterEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    });

    effects = TestBed.inject(DraftCharacterEffects);
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
  });

  it('should dispatch getSelectedRaceSuccess when getSelectedRace is called', () => {
    const action = draftCharacterActions.getSelectedRace({ selectedRace: initialState.selectedRace });
    const completion = draftCharacterActions.getSelectedRaceSuccess({ selectedRace: initialState.selectedRace });

    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.raceGetSelected$).toBeObservable(expected);
  });

  it('should dispatch getSelectedClassSuccess when getSelectedClass is called', () => {
    const action = draftCharacterActions.getSelectedClass({ selectedClass: initialState.selectedClass });
    const completion = draftCharacterActions.getSelectedClassSuccess({ selectedClass: initialState.selectedClass });

    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.classGetSelected$).toBeObservable(expected);
  });

  it('should dispatch getSelectedBackgroundSuccess when getSelectedBackground is called', () => {
    const action = draftCharacterActions.getSelectedBackground({ selectedBackground: initialState.selectedBackground });
    const completion = draftCharacterActions.getSelectedBackgroundSuccess({ selectedBackground: initialState.selectedBackground });

    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.backgroundGetSelected$).toBeObservable(expected);
  });

  it('should dispatch getRaceAbilityBonusesSuccess when getRaceAbilityBonuses is called', () => {
    const abilityBonuses: AbilityBonus[] = [{ ability_score: { index: 'str', name: 'STR', url: '' }, bonus: 2 }];
    const action = draftCharacterActions.getRaceAbilityBonuses({ abilityBonuses });
    const completion = draftCharacterActions.getRaceAbilityBonusesSuccess({ abilityBonuses: initialState.abilityBonuses });

    actions$ = hot('-a', { a: action });
    const expected = cold('-b', { b: completion });

    expect(effects.raceAbilityBonusesGet$).toBeObservable(expected);
  });

  it('should dispatch getSubraceAbilityBonusesSuccess when getSubraceAbilityBonuses is called and bonuses are updated', () => {
    const abilityBonuses: AbilityBonus[] = [{ ability_score: { index: 'con', name: 'CON', url: '' }, bonus: 1 }];
    const action = draftCharacterActions.getSubraceAbilityBonuses({ abilityBonuses });

    actions$ = hot('-a', { a: action });
    store.overrideSelector(selectCurrentAbilityBonuses, initialState.abilityBonuses);
    const response = cold('-a|', { a: abilityBonuses });
    const expected = cold('--b', { b: draftCharacterActions.getSubraceAbilityBonusesSuccess({ abilityBonuses: [...initialState.abilityBonuses, ...abilityBonuses] }) });

    expect(effects.subraceAbilityBonusesGet$).toBeObservable(expected);
  });

  it('should not dispatch getSubraceAbilityBonusesSuccess when getSubraceAbilityBonuses is called and bonuses are not updated', () => {
    const abilityBonuses: AbilityBonus[] = initialState.abilityBonuses;
    const action = draftCharacterActions.getSubraceAbilityBonuses({ abilityBonuses });

    actions$ = hot('-a', { a: action });
    store.overrideSelector(selectCurrentAbilityBonuses, initialState.abilityBonuses);
    const response = cold('-a|', { a: abilityBonuses });
    const expected = cold('---');

    expect(effects.subraceAbilityBonusesGet$).toBeObservable(expected);
  });
});
