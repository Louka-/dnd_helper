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
    if (data.length) {
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
            return item.items.map(it => {
              if (it.option_type === 'counted_reference') {
                return {
                  index: it.of.index,
                  name: it.of.name,
                  url: it.of.url,
                  quantity: it.count
                }
              }
              if (it.option_type === 'choice') {
                return {
                  index: it.choice.from.equipment_category.index,
                  name: it.choice.from.equipment_category.name,
                  url: it.choice.from.equipment_category.url,
                  quantity: it.choice.choose
                }
              }
            });
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
    } else if (!data.from.options && data.from) {
      return [{
        index: data.from.equipment_category.index,
        name: data.from.equipment_category.name,
        url: data.from.equipment_category.url,
        quantity: data.choose
      }];
    }
    return [];
  }

  static mapClassFromApi(data: any): Class {
    return {
      ...data,
      proficiency_choices: this.mapProficiencyChoicesFromApi(data.proficiency_choices),
      starting_equipment: this.mapStartingEquipmentFromApi(data.starting_equipment),
      starting_equipment_options: this.mapStartingEquipmentOptionsFromApi(data.starting_equipment_options),
      //TODO to map after later implementation
      subclasses: null,
      multi_classing: null,
    }
  }
}