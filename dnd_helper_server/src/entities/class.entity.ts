import { Entity, Column, PrimaryColumn } from 'typeorm';
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

  @Column()
  proficiency_choices: ProficienciesOption[];

  @Column()
  proficiencies: Proficiency[];

  @Column()
  saving_throws: AbilityScore[];

  @Column()
  starting_equipment: Equipment[];

  @Column()
  starting_equipment_options: EquipmentChoice[];

  @Column()
  class_levels: string;

  //TODO set as null for now, later implementation

  @Column({ nullable: true })
  subclasses: string;

  @Column({ nullable: true })
  multi_classing: string;

  @Column()
  spellcasting: Spellcasting;

  @Column()
  spells: string;

  @Column()
  url: string;
}