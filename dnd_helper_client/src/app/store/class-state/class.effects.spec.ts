import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { ClassEffects } from './class.effects';
import { ClassService } from '../../services/class.service';
import { classesActions } from './class.actions';
import { draftCharacterActions } from '../draft-character-state/draft-character.actions';
import { Action } from '@ngrx/store';
import { cold, hot } from 'jest-marbles';
import { Class, ClassDetails } from '../../models/class.model';

describe('ClassEffects', () => {
  let actions$: Observable<Action>;
  let effects: ClassEffects;
  let classService: jest.Mocked<ClassService>;
  let store: MockStore;

  const mockClasses: Class[] = [
    { index: 'class1', name: 'Class 1', url: 'api/class' },
    { index: 'class2', name: 'Class 2', url: 'api/class' },
  ];

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

  beforeEach(() => {
    const classServiceMock = {
      getAllClasses: jest.fn(),
      getClassById: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ClassEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        { provide: ClassService, useValue: classServiceMock }
      ]
    });

    effects = TestBed.inject(ClassEffects);
    classService = TestBed.inject(ClassService) as jest.Mocked<ClassService>;
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
  });

  it('should dispatch getAllClassesSuccess when getAllClasses is successful', () => {
    const action = classesActions.getAllClasses();
    const completion = classesActions.getAllClassesSuccess({ classes: mockClasses });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: mockClasses });
    classService.getAllClasses.mockReturnValue(response);

    const expected = cold('--b', { b: completion });

    expect(effects.classesGetAll$).toBeObservable(expected);
  });

  it('should dispatch getClassSuccess and getSelectedClass when getClassByIdFromApi is successful', () => {
    const action = classesActions.getClassByIdFromApi({ index: 'class1' });
    const completion = classesActions.getClassSuccess({ classDetails: mockClassDetails });
    const draftAction = draftCharacterActions.getSelectedClass({ selectedClass: mockClassDetails });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: mockClassDetails });
    classService.getClassById.mockReturnValue(response);

    effects.classGetOneByIdFromApi$.subscribe(resultAction => {
      expect(resultAction).toEqual(completion);
      expect(store.dispatch).toHaveBeenCalledWith(draftAction);
    });
  });

  it('should dispatch getClassSuccess and getSelectedClass when getClassFromStore is called', () => {
    const action = classesActions.getClassFromStore({ classDetails: mockClassDetails });
    const completion = classesActions.getClassSuccess({ classDetails: mockClassDetails });
    const draftAction = draftCharacterActions.getSelectedClass({ selectedClass: mockClassDetails });

    actions$ = hot('-a', { a: action });
    const expected = cold('-(bc)', { b: draftAction, c: completion });

    effects.classGetOneFromStore$.subscribe(resultAction => {
      expect(resultAction).toEqual(completion);
      expect(store.dispatch).toHaveBeenCalledWith(draftAction);
    });
  });
});
