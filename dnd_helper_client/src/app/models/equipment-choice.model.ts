import { Equipment } from "./equipment.model";

export interface EquipmentChoice {
  id?: number;
  description: string;
  choose: number;
  equipment_options: Equipment[];
}
