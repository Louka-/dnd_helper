import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Equipment } from "./equipment.entity";

@Entity('equipment_choice')
export class EquipmentChoice {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  choose: number;

  @Column()
  equipment_options: Equipment[];
}