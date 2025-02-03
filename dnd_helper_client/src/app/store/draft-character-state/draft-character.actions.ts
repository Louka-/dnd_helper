import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ClassDetails } from '../../models/class.model';
import { RaceDetails } from '../../models/race.model';
import { AbilityBonus } from '../../models/ability-bonus.model';
import { BackgroundDetails } from '../../models/background.model';

export const draftCharacterActions = createActionGroup({
  source: 'Draft Character',
  events: {
    'Get Selected Race': props<{ selectedRace: RaceDetails }>(),
    'Get Selected Race Success': props<{ selectedRace: RaceDetails }>(),
    'Get Selected Race Failure': props<{ error: any }>(),

    'Get Selected Class': props<{ selectedClass: ClassDetails }>(),
    'Get Selected Class Success': props<{ selectedClass: ClassDetails }>(),
    'Get Selected Class Failure': props<{ error: any }>(),

    'Get Selected Background': props<{ selectedBackground: BackgroundDetails }>(),
    'Get Selected Background Success': props<{ selectedBackground: BackgroundDetails }>(),
    'Get Selected Background Failure': props<{ error: any }>(),

    'Get Race Ability Bonuses': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Race Ability Bonuses Success': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Subrace Ability Bonuses': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Subrace Ability Bonuses Success': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Ability Bonuses Failure': props<{ error: any }>(),

    'Increase Ability Points': emptyProps(),
    'Decrease Ability Points': emptyProps(),
    'Reset Ability Points': emptyProps(),
    'Get Ability Points Failure': props<{ error: any }>(),

    'Increase Ability Bonus': props<{ index: string }>(),
    'Decrease Ability Bonus': props<{ index: string }>(),
    'Get Ability Bonus Failure': props<{ error: any }>(),

    'Increase Strenght With Racial Bonuses': props<{ abilityBonus: AbilityBonus }>(),
    'Increase Constitution With Racial Bonuses': props<{ abilityBonus: AbilityBonus }>(),
    'Increase Dexterity With Racial Bonuses': props<{ abilityBonus: AbilityBonus }>(),
    'Increase Intelligence With Racial Bonuses': props<{ abilityBonus: AbilityBonus }>(),
    'Increase Wisdom With Racial Bonuses': props<{ abilityBonus: AbilityBonus }>(),
    'Increase Charisma With Racial Bonuses': props<{ abilityBonus: AbilityBonus }>(),
  },
});
