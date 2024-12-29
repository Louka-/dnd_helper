import { Class } from "src/entities/class.entity";
import { EquipmentChoice } from "src/entities/equipment-choice.entity";
import { Equipment } from "src/entities/equipment.entity";
import { ProficienciesOption } from "src/entities/proficiencies-option.entity";

export default class ClassesUtils {
  static mapProficiencyChoicesFromApi(data: any): ProficienciesOption[] {
    if (data) {
      return data.map(element => (
        {
          description: element.desc,
          choose: element.choose,
          options: element.from.options.map(el => (el.item))
        }));
    }
    return [];
  }

  static mapStartingEquipmentFromApi(data: any): Equipment[] {
    if (data) {
      return data.map(element => ({
        index: element.equipment.index,
        name: element.equipment.name,
        url: element.equipment.url,
        quantity: element.quantity
      }));
    }
    return [];
  }

  static mapStartingEquipmentOptionsFromApi(data: any): EquipmentChoice[] {
    if (data) {
      return data.map(element => ({
        description: element.desc,
        choose: element.choose,
        equipment_options: this.mapEquipmentOptionsFromApi(element),
      }));
    }
    return [];
  }

  static mapEquipmentOptionsFromApi(data: any): Equipment[] {
    if (data.from.options) {
      return data.from.options.map(item => {
        switch (item.option_type) {
          case 'counted_reference':
            return {
              index: item.of.index,
              name: item.of.name,
              url: item.of.url,
              quantity: item.count
            };
          case 'multiple':
            return item.items.map(it => ({
              index: it.of.index,
              name: it.of.name,
              url: it.of.url,
              quantity: it.count
            }));
          case 'choice':
            return {
              index: item.choice.from.equipment_category.index,
              name: item.choice.from.equipment_category.name,
              url: item.choice.from.equipment_category.url,
              quantity: item.choice.choose
            };
          default:
            break;
        }
      })
    }
    return [];
  }

  static mapClassFromApi(data: any): Class {
    return {
      ...data,
      proficiency_choices: ClassesUtils.mapProficiencyChoicesFromApi(data.proficiency_choices),
      starting_equipment: ClassesUtils.mapStartingEquipmentFromApi(data.starting_equipment),
      starting_equipment_options: ClassesUtils.mapStartingEquipmentOptionsFromApi(data.starting_equipment_options),
      //TODO to map after later implementation
      subclasses: null,
      multi_classing: null,
    }
  }
}