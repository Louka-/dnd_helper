import { selectClassesState, selectAllClasses, selectClassDetails, selectClassById } from './class.selectors';
import { ClassState } from './class.reducer';
import { Class, ClassDetails } from '../../models/class.model';

describe('Class Selectors', () => {
  const mockClasses: Class[] = [
    { index: 'class1', name: 'Class 1', url: 'api/class' },
    { index: 'class2', name: 'Class 2', url: 'api/class' },
  ];

  const mockClassDetails: ClassDetails[] = [
    {
      index: 'class1',
      name: 'Class 1',
      hit_die: 2,
      proficiency_choices: [],
      proficiencies: [],
      saving_throws: [],
      starting_equipment: [],
      starting_equipment_options: [],
      class_levels: 'string',
      subclasses: 'string',
      multi_classing: 'string',
      spellcasting: undefined,
      spells: 'string',
      url: 'string',
    },
    {
      index: 'class2',
      name: 'Class 2',
      hit_die: 2,
      proficiency_choices: [],
      proficiencies: [],
      saving_throws: [],
      starting_equipment: [],
      starting_equipment_options: [],
      class_levels: 'string',
      subclasses: 'string',
      multi_classing: 'string',
      spellcasting: undefined,
      spells: 'string',
      url: 'string',
    },
  ];

  const initialState: ClassState = {
    classes: mockClasses,
    classDetails: mockClassDetails,
  };

  it('should select the classes state', () => {
    const result = selectClassesState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select all classes', () => {
    const result = selectAllClasses.projector(initialState);
    expect(result).toEqual(mockClasses);
  });

  it('should select all class details', () => {
    const result = selectClassDetails.projector(initialState);
    expect(result).toEqual(mockClassDetails);
  });

  it('should select class by id', () => {
    const result = selectClassById('class1').projector(initialState);
    expect(result).toEqual(mockClassDetails[0]);
  });

  it('should return undefined if class by id not found', () => {
    const result = selectClassById('nonexistent').projector(initialState);
    expect(result).toBeUndefined();
  });
});
