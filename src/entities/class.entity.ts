import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProficienciesOption } from './proficiencies-option.entity';
import { Proficiency } from './proficiency.entity';
import { Equipment } from './equipment.entity';
import { Spellcasting } from './spellcasting.entity';
import { EquipmentChoice } from './equipment-choice.entity';
import { AbilityScore } from './ability-score.entity';

@Entity('class')
export class Class {
  @PrimaryColumn()
  index: string;

  @Column()
  name: string;

  @Column()
  hit_die: number;

  @ManyToOne(() => ProficienciesOption, proficiencyOption => proficiencyOption.id)
  proficiency_choices: ProficienciesOption[];

  @ManyToOne(() => Proficiency, proficiency => proficiency.index)
  proficiencies: Proficiency[];

  @ManyToOne(() => AbilityScore, abilityScore => abilityScore.index)
  saving_throws: AbilityScore[];

  @ManyToOne(() => Equipment, equipment => equipment.index)
  starting_equipment: Equipment[];

  @ManyToOne(() => EquipmentChoice, equipmentChoice => equipmentChoice.id)
  starting_equipment_options: EquipmentChoice[];

  @Column()
  class_levels: string;

  //TODO set as null for now, later implementation

  @Column({ nullable: true })
  subclasses: string;

  @Column({ nullable: true })
  multi_classing: string;

  @ManyToOne(() => Spellcasting, spellcasting => spellcasting.id)
  spellcasting: Spellcasting;

  @Column()
  spells: string;

  @Column()
  url: string;
}