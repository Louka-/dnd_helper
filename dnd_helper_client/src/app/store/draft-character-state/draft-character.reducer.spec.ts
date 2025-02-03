import { draftCharacterReducer, draftCharacterInitialState, DraftCharacterState } from './draft-character.reducer';
import { draftCharacterActions } from './draft-character.actions';
import { RaceDetails } from '../../models/race.model';
import { ClassDetails } from '../../models/class.model';
import { BackgroundDetails } from '../../models/background.model';
import { AbilityBonus } from '../../models/ability-bonus.model';
import DraftCharacterStateUtils from '../../utils/draft-character-state.utils';

describe('Draft Character Reducer', () => {
  const initialState: DraftCharacterState = draftCharacterInitialState;

  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'Unknown' } as any;
    const state = draftCharacterReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle getSelectedRace action', () => {
    const selectedRace: RaceDetails = {
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
    };
    const action = draftCharacterActions.getSelectedRace({ selectedRace });
    const state = draftCharacterReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      strAbilityBonus: draftCharacterInitialState.strAbilityBonus,
      conAbilityBonus: draftCharacterInitialState.conAbilityBonus,
      dexAbilityBonus: draftCharacterInitialState.dexAbilityBonus,
      intAbilityBonus: draftCharacterInitialState.intAbilityBonus,
      wisAbilityBonus: draftCharacterInitialState.wisAbilityBonus,
      chaAbilityBonus: draftCharacterInitialState.chaAbilityBonus,
    });
  });

  it('should handle getSelectedRaceSuccess action', () => {
    const selectedRace: RaceDetails = {
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
    };
    const action = draftCharacterActions.getSelectedRaceSuccess({ selectedRace });
    const state = draftCharacterReducer(initialState, action);

    expect(state.selectedRace).toEqual(selectedRace);
  });

  it('should handle getSelectedClass action', () => {
    const selectedClass: ClassDetails = {
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
    };
    const action = draftCharacterActions.getSelectedClass({ selectedClass });
    const state = draftCharacterReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getSelectedClassSuccess action', () => {
    const selectedClass: ClassDetails = {
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
    };
    const action = draftCharacterActions.getSelectedClassSuccess({ selectedClass });
    const state = draftCharacterReducer(initialState, action);

    expect(state.selectedClass).toEqual(selectedClass);
  });

  it('should handle getSelectedBackground action', () => {
    const selectedBackground: BackgroundDetails = {
      index: 'background1',
      name: 'Background 1',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url: 'api/backgrounds/background1',
    };
    const action = draftCharacterActions.getSelectedBackground({ selectedBackground });
    const state = draftCharacterReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getSelectedBackgroundSuccess action', () => {
    const selectedBackground: BackgroundDetails = {
      index: 'background1',
      name: 'Background 1',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url: 'api/backgrounds/background1',
    };
    const action = draftCharacterActions.getSelectedBackgroundSuccess({ selectedBackground });
    const state = draftCharacterReducer(initialState, action);

    expect(state.selectedBackground).toEqual(selectedBackground);
  });

  it('should handle getRaceAbilityBonuses action', () => {
    const abilityBonuses: AbilityBonus[] = [{
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    }];
    const action = draftCharacterActions.getRaceAbilityBonuses({ abilityBonuses });
    const state = draftCharacterReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getRaceAbilityBonusesSuccess action', () => {
    const abilityBonuses: AbilityBonus[] = [{
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    }];
    const action = draftCharacterActions.getRaceAbilityBonusesSuccess({ abilityBonuses });
    const state = draftCharacterReducer(initialState, action);

    expect(state.abilityBonuses).toEqual(abilityBonuses);
  });

  it('should handle getSubraceAbilityBonuses action', () => {
    const abilityBonuses: AbilityBonus[] = [{
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    }];
    const action = draftCharacterActions.getSubraceAbilityBonuses({ abilityBonuses });
    const state = draftCharacterReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getSubraceAbilityBonusesSuccess action', () => {
    const abilityBonuses: AbilityBonus[] = [{
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    }];
    const action = draftCharacterActions.getSubraceAbilityBonusesSuccess({ abilityBonuses });
    const state = draftCharacterReducer(initialState, action);

    expect(state.abilityBonuses).toEqual(abilityBonuses);
  });

  it('should handle resetAbilityPoints action', () => {
    const action = draftCharacterActions.resetAbilityPoints();
    const state = draftCharacterReducer(initialState, action);

    expect(state.availablePoints).toEqual(draftCharacterInitialState.availablePoints);
    expect(state.strAbilityBonus).toEqual(DraftCharacterStateUtils.getInitialStrengthWithRacialBonuses(state));
    expect(state.conAbilityBonus).toEqual(DraftCharacterStateUtils.getInitialConstitutionWithRacialBonuses(state));
    expect(state.dexAbilityBonus).toEqual(DraftCharacterStateUtils.getInitialDexterityWithRacialBonuses(state));
    expect(state.intAbilityBonus).toEqual(DraftCharacterStateUtils.getInitialIntelligenceWithRacialBonuses(state));
    expect(state.wisAbilityBonus).toEqual(DraftCharacterStateUtils.getInitialWisdomWithRacialBonuses(state));
    expect(state.chaAbilityBonus).toEqual(DraftCharacterStateUtils.getInitialCharismaWithRacialBonuses(state));
  });

  it('should handle increaseAbilityPoints action', () => {
    const action = draftCharacterActions.increaseAbilityPoints();
    const state = draftCharacterReducer(initialState, action);

    expect(state.availablePoints).toEqual(initialState.availablePoints + 1);
  });

  it('should handle decreaseAbilityPoints action', () => {
    const action = draftCharacterActions.decreaseAbilityPoints();
    const state = draftCharacterReducer(initialState, action);

    expect(state.availablePoints).toEqual(initialState.availablePoints - 1);
  });

  it('should handle increaseAbilityBonus action', () => {
    const action = draftCharacterActions.increaseAbilityBonus({ index: 'str' });
    const state = draftCharacterReducer(initialState, action);

    expect(state.strAbilityBonus.bonus).toEqual(initialState.strAbilityBonus.bonus + 1);
  });

  it('should handle decreaseAbilityBonus action', () => {
    const action = draftCharacterActions.decreaseAbilityBonus({ index: 'str' });
    const state = draftCharacterReducer(initialState, action);

    expect(state.strAbilityBonus.bonus).toEqual(initialState.strAbilityBonus.bonus - 1);
  });

  it('should handle increaseStrenghtWithRacialBonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'str',
        name: 'Str',
        url: 'api/abilities/str',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseStrenghtWithRacialBonuses({ abilityBonus });
    const state = draftCharacterReducer(initialState, action);

    expect(state.strAbilityBonus.bonus).toEqual(initialState.strAbilityBonus.bonus + abilityBonus.bonus);
  });

  it('should handle increaseConstitutionWithRacialBonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseConstitutionWithRacialBonuses({ abilityBonus });
    const state = draftCharacterReducer(initialState, action);

    expect(state.conAbilityBonus.bonus).toEqual(initialState.conAbilityBonus.bonus + abilityBonus.bonus);
  });

  it('should handle increaseDexterityWithRacialBonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'dex',
        name: 'Dex',
        url: 'api/abilities/dex',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseDexterityWithRacialBonuses({ abilityBonus });
    const state = draftCharacterReducer(initialState, action);

    expect(state.dexAbilityBonus.bonus).toEqual(initialState.dexAbilityBonus.bonus + abilityBonus.bonus);
  });

  it('should handle increaseIntelligenceWithRacialBonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'int',
        name: 'Int',
        url: 'api/abilities/int',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseIntelligenceWithRacialBonuses({ abilityBonus });
    const state = draftCharacterReducer(initialState, action);

    expect(state.intAbilityBonus.bonus).toEqual(initialState.intAbilityBonus.bonus + abilityBonus.bonus);
  });

  it('should handle increaseWisdomWithRacialBonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'wis',
        name: 'Wis',
        url: 'api/abilities/wis',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseWisdomWithRacialBonuses({ abilityBonus });
    const state = draftCharacterReducer(initialState, action);

    expect(state.wisAbilityBonus.bonus).toEqual(initialState.wisAbilityBonus.bonus + abilityBonus.bonus);
  });

  it('should handle increaseCharismaWithRacialBonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'cha',
        name: 'Cha',
        url: 'api/abilities/cha',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseCharismaWithRacialBonuses({ abilityBonus });
    const state = draftCharacterReducer(initialState, action);

    expect(state.chaAbilityBonus.bonus).toEqual(initialState.chaAbilityBonus.bonus + abilityBonus.bonus);
  });
});
