import { classReducer, classInitialState, ClassState } from './class.reducer';
import { classesActions } from './class.actions';
import { Class, ClassDetails } from '../../models/class.model';

describe('Class Reducer', () => {
  const initialState: ClassState = classInitialState;

  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'Unknown' } as any;
    const state = classReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle getAllClasses action', () => {
    const action = classesActions.getAllClasses();
    const state = classReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getAllClassesSuccess action', () => {
    const mockClasses: Class[] = [
      { index: 'class1', name: 'Class 1', url: 'api/class' },
      { index: 'class2', name: 'Class 2', url: 'api/class' },
    ];
    const action = classesActions.getAllClassesSuccess({ classes: mockClasses });
    const state = classReducer(initialState, action);

    expect(state).toEqual({ ...initialState, classes: mockClasses });
  });

  it('should handle getClassByIdFromApi action', () => {
    const action = classesActions.getClassByIdFromApi({ index: 'class1' });
    const state = classReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getClassFromStore action', () => {
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
    const state = classReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getClassSuccess action when classDetails is not already in state', () => {
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
    const state = classReducer(initialState, action);

    expect(state.classDetails).toContainEqual(mockClassDetails);
  });

  it('should handle getClassSuccess action when classDetails is already in state', () => {
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
    const initialStateWithDetails: ClassState = {
      ...initialState,
      classDetails: [mockClassDetails],
    };
    const action = classesActions.getClassSuccess({ classDetails: mockClassDetails });
    const state = classReducer(initialStateWithDetails, action);

    expect(state.classDetails.length).toBe(1);
    expect(state.classDetails).toContainEqual(mockClassDetails);
  });
});
