import { Column, Entity, PrimaryColumn } from "typeorm";
import { EquipmentChoice } from "./equipment-choice.entity";
import { Equipment } from "./equipment.entity";
import { LanguageOption } from "./language-option.entity";
import { Proficiency } from "./proficiency.entity";

@Entity('background')
export class Background {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    starting_proficiencies: Proficiency[];

    @Column()
    language_options?: LanguageOption;

    @Column()
    starting_equipment: Equipment[];

    @Column()
    starting_equipment_options: EquipmentChoice[];

    //feature

    @Column()
    url: string;
}