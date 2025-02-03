import { draftCharacterActions } from './draft-character.actions';
import { ClassDetails } from '../../models/class.model';
import { RaceDetails } from '../../models/race.model';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { BackgroundDetails } from '../../models/background.model';

describe('Draft Character Actions', () => {
  it('should create Get Selected Race action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Selected Race');
    expect(action.selectedRace).toEqual(selectedRace);
  });

  it('should create Get Selected Race Success action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Selected Race Success');
    expect(action.selectedRace).toEqual(selectedRace);
  });

  it('should create Get Selected Race Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = draftCharacterActions.getSelectedRaceFailure({ error });
    expect(action.type).toBe('[Draft Character] Get Selected Race Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Get Selected Class action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Selected Class');
    expect(action.selectedClass).toEqual(selectedClass);
  });

  it('should create Get Selected Class Success action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Selected Class Success');
    expect(action.selectedClass).toEqual(selectedClass);
  });

  it('should create Get Selected Class Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = draftCharacterActions.getSelectedClassFailure({ error });
    expect(action.type).toBe('[Draft Character] Get Selected Class Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Get Selected Background action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Selected Background');
    expect(action.selectedBackground).toEqual(selectedBackground);
  });

  it('should create Get Selected Background Success action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Selected Background Success');
    expect(action.selectedBackground).toEqual(selectedBackground);
  });

  it('should create Get Selected Background Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = draftCharacterActions.getSelectedBackgroundFailure({ error });
    expect(action.type).toBe('[Draft Character] Get Selected Background Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Get Race Ability Bonuses action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Race Ability Bonuses');
    expect(action.abilityBonuses).toEqual(abilityBonuses);
  });

  it('should create Get Race Ability Bonuses Success action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Race Ability Bonuses Success');
    expect(action.abilityBonuses).toEqual(abilityBonuses);
  });

  it('should create Get Subrace Ability Bonuses action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Subrace Ability Bonuses');
    expect(action.abilityBonuses).toEqual(abilityBonuses);
  });

  it('should create Get Subrace Ability Bonuses Success action', () => {
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
    expect(action.type).toBe('[Draft Character] Get Subrace Ability Bonuses Success');
    expect(action.abilityBonuses).toEqual(abilityBonuses);
  });

  it('should create Get Ability Bonuses Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = draftCharacterActions.getAbilityBonusesFailure({ error });
    expect(action.type).toBe('[Draft Character] Get Ability Bonuses Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Increase Ability Points action', () => {
    const action = draftCharacterActions.increaseAbilityPoints();
    expect(action.type).toBe('[Draft Character] Increase Ability Points');
  });

  it('should create Decrease Ability Points action', () => {
    const action = draftCharacterActions.decreaseAbilityPoints();
    expect(action.type).toBe('[Draft Character] Decrease Ability Points');
  });

  it('should create Reset Ability Points action', () => {
    const action = draftCharacterActions.resetAbilityPoints();
    expect(action.type).toBe('[Draft Character] Reset Ability Points');
  });

  it('should create Get Ability Points Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = draftCharacterActions.getAbilityPointsFailure({ error });
    expect(action.type).toBe('[Draft Character] Get Ability Points Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Increase Ability Bonus action', () => {
    const index = 'bonus1';
    const action = draftCharacterActions.increaseAbilityBonus({ index });
    expect(action.type).toBe('[Draft Character] Increase Ability Bonus');
    expect(action.index).toBe(index);
  });

  it('should create Decrease Ability Bonus action', () => {
    const index = 'bonus1';
    const action = draftCharacterActions.decreaseAbilityBonus({ index });
    expect(action.type).toBe('[Draft Character] Decrease Ability Bonus');
    expect(action.index).toBe(index);
  });

  it('should create Get Ability Bonus Failure action', () => {
    const error = { message: 'Error occurred' };
    const action = draftCharacterActions.getAbilityBonusFailure({ error });
    expect(action.type).toBe('[Draft Character] Get Ability Bonus Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Increase Strenght With Racial Bonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseStrenghtWithRacialBonuses({ abilityBonus });
    expect(action.type).toBe('[Draft Character] Increase Strenght With Racial Bonuses');
    expect(action.abilityBonus).toEqual(abilityBonus);
  });

  it('should create Increase Constitution With Racial Bonuses action', () => {
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
    expect(action.type).toBe('[Draft Character] Increase Constitution With Racial Bonuses');
    expect(action.abilityBonus).toEqual(abilityBonus);
  });

  it('should create Increase Dexterity With Racial Bonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseDexterityWithRacialBonuses({ abilityBonus });
    expect(action.type).toBe('[Draft Character] Increase Dexterity With Racial Bonuses');
    expect(action.abilityBonus).toEqual(abilityBonus);
  });

  it('should create Increase Intelligence With Racial Bonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseIntelligenceWithRacialBonuses({ abilityBonus });
    expect(action.type).toBe('[Draft Character] Increase Intelligence With Racial Bonuses');
    expect(action.abilityBonus).toEqual(abilityBonus);
  });

  it('should create Increase Wisdom With Racial Bonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseWisdomWithRacialBonuses({ abilityBonus });
    expect(action.type).toBe('[Draft Character] Increase Wisdom With Racial Bonuses');
    expect(action.abilityBonus).toEqual(abilityBonus);
  });

  it('should create Increase Charisma With Racial Bonuses action', () => {
    const abilityBonus: AbilityBonus = {
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    };
    const action = draftCharacterActions.increaseCharismaWithRacialBonuses({ abilityBonus });
    expect(action.type).toBe('[Draft Character] Increase Charisma With Racial Bonuses');
    expect(action.abilityBonus).toEqual(abilityBonus);
  });
});
