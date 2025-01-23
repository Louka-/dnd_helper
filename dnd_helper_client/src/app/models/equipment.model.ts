export interface Equipment {
  index: string;
  name: string;
  quantity: number;
  url: string;
}

export interface EquipmentChoice {
  id?: number;
  description: string;
  choose: number;
  equipment_options: Equipment[];
}
