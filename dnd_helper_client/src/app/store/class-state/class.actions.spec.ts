import { classesActions } from './class.actions';
import { Class, ClassDetails } from '../../models/class.model';

describe('Classes Actions', () => {

  it('should create Get All Classes action', () => {
    const action = classesActions.getAllClasses();
    expect(action.type).toBe('[Classes] Get All Classes');
  });

  it('should create Get All Classes Success action', () => {
    const mockClasses: Class[] = [
      { index: 'class1', name: 'Class 1', url: 'api/class' },
      { index: 'class2', name: 'Class 2', url: 'api/class' },
    ];
    const action = classesActions.getAllClassesSuccess({ classes: mockClasses });
    expect(action.type).toBe('[Classes] Get All Classes Success');
    expect(action.classes).toEqual(mockClasses);
  });

  it('should create Get All Classes Failure action', () => {
    const mockError = { message: 'Error occurred' };
    const action = classesActions.getAllClassesFailure({ error: mockError });
    expect(action.type).toBe('[Classes] Get All Classes Failure');
    expect(action.error).toEqual(mockError);
  });

  it('should create Get Class By Id From Api action', () => {
    const index = 'class1';
    const action = classesActions.getClassByIdFromApi({ index });
    expect(action.type).toBe('[Classes] Get Class By Id From Api');
    expect(action.index).toBe(index);
  });

  it('should create Get Class From Store action', () => {
    const mockClassDetails: ClassDetails = {
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
  };
    const action = classesActions.getClassFromStore({ classDetails: mockClassDetails });
    expect(action.type).toBe('[Classes] Get Class From Store');
    expect(action.classDetails).toEqual(mockClassDetails);
  });

  it('should create Get Class Success action', () => {
    const mockClassDetails: ClassDetails = {
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
  };
    const action = classesActions.getClassSuccess({ classDetails: mockClassDetails });
    expect(action.type).toBe('[Classes] Get Class Success');
    expect(action.classDetails).toEqual(mockClassDetails);
  });

  it('should create Get Class Failure action', () => {
    const mockError = { message: 'Error occurred' };
    const action = classesActions.getClassFailure({ error: mockError });
    expect(action.type).toBe('[Classes] Get Class Failure');
    expect(action.error).toEqual(mockError);
  });
});
