import { createActionGroup, props } from '@ngrx/store';
import { ClassDetails } from '../../models/class.model';
import { RaceDetails } from '../../models/race.model';
import { AbilityBonus } from '../../models/ability-bonus.model';

export const draftCharacterActions = createActionGroup({
  source: 'Draft Character',
  events: {
    'Get Selected Race': props<{ selectedRace: RaceDetails }>(),
    'Get Selected Race Success': props<{ selectedRace: RaceDetails }>(),
    'Get Selected Race Failure': props<{ error: any }>(),

    'Get Selected Class': props<{ selectedClass: ClassDetails }>(),
    'Get Selected Class Success': props<{ selectedClass: ClassDetails }>(),
    'Get Selected Class Failure': props<{ error: any }>(),

    'Get Race Ability Bonuses': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Race Ability Bonuses Success': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Subrace Ability Bonuses': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Subrace Ability Bonuses Success': props<{ abilityBonuses: AbilityBonus[] }>(),
    'Get Ability Bonuses Failure': props<{ error: any }>(),
  },
});
