import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Equipment } from "./equipment.entity";

@Entity('equipment_choice')
export class EquipmentChoice {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  choose: number;

  @ManyToOne(() => Equipment, equipment => equipment.index)
  equipment_options: Equipment[];
}