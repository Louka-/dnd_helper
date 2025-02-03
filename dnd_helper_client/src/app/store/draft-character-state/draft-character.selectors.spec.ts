import {
  selectDraftCharacterState,
  selectSelectedRace,
  selectSelectedClass,
  selectCurrentAbilityBonuses,
  selectStrAbilityBonus,
  selectConAbilityBonus,
  selectDexAbilityBonus,
  selectIntAbilityBonus,
  selectWisAbilityBonus,
  selectChaAbilityBonus,
  selectAvailablePoints
} from './draft-character.selectors';
import { DraftCharacterState } from './draft-character.reducer';
import { RaceDetails } from '../../models/race.model';
import { ClassDetails } from '../../models/class.model';
import { AbilityBonus } from '../../models/ability-bonus.model';

describe('Draft Character Selectors', () => {
  const mockState: DraftCharacterState = {
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
    },
    abilityBonuses: [{
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    }] as AbilityBonus[],
    strAbilityBonus: {
      ability_score:
      {
        index: 'str',
        name: 'Str',
        url: 'api/abilities/str',
      },
      bonus: 2
    },
    conAbilityBonus: {
      ability_score:
      {
        index: 'con',
        name: 'Con',
        url: 'api/abilities/con',
      },
      bonus: 2
    },
    dexAbilityBonus: {
      ability_score:
      {
        index: 'dex',
        name: 'Dex',
        url: 'api/abilities/dex',
      },
      bonus: 2
    },
    intAbilityBonus: {
      ability_score:
      {
        index: 'int',
        name: 'Int',
        url: 'api/abilities/int',
      },
      bonus: 2
    },
    wisAbilityBonus: {
      ability_score:
      {
        index: 'wis',
        name: 'Wis',
        url: 'api/abilities/wis',
      },
      bonus: 2
    },
    chaAbilityBonus: {
      ability_score:
      {
        index: 'cha',
        name: 'Cha',
        url: 'api/abilities/cha',
      },
      bonus: 2
    },
    availablePoints: 10,
  };

  it('should select the draft character state', () => {
    const result = selectDraftCharacterState.projector(mockState);
    expect(result).toEqual(mockState);
  });

  it('should select the selected race', () => {
    const result = selectSelectedRace.projector(mockState);
    expect(result).toEqual(mockState.selectedRace);
  });

  it('should select the selected class', () => {
    const result = selectSelectedClass.projector(mockState);
    expect(result).toEqual(mockState.selectedClass);
  });

  it('should select the current ability bonuses', () => {
    const result = selectCurrentAbilityBonuses.projector(mockState);
    expect(result).toEqual(mockState.abilityBonuses);
  });

  it('should select the strength ability bonus', () => {
    const result = selectStrAbilityBonus.projector(mockState);
    expect(result).toEqual(mockState.strAbilityBonus);
  });

  it('should select the constitution ability bonus', () => {
    const result = selectConAbilityBonus.projector(mockState);
    expect(result).toEqual(mockState.conAbilityBonus);
  });

  it('should select the dexterity ability bonus', () => {
    const result = selectDexAbilityBonus.projector(mockState);
    expect(result).toEqual(mockState.dexAbilityBonus);
  });

  it('should select the intelligence ability bonus', () => {
    const result = selectIntAbilityBonus.projector(mockState);
    expect(result).toEqual(mockState.intAbilityBonus);
  });

  it('should select the wisdom ability bonus', () => {
    const result = selectWisAbilityBonus.projector(mockState);
    expect(result).toEqual(mockState.wisAbilityBonus);
  });

  it('should select the charisma ability bonus', () => {
    const result = selectChaAbilityBonus.projector(mockState);
    expect(result).toEqual(mockState.chaAbilityBonus);
  });

  it('should select the available points', () => {
    const result = selectAvailablePoints.projector(mockState);
    expect(result).toEqual(mockState.availablePoints);
  });
});
