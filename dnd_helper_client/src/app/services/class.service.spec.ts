import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ClassService } from './class.service';
import { Class, ClassDetails } from '../models/class.model';
import { provideHttpClient } from '@angular/common/http';

describe('ClassService', () => {
  let service: ClassService;
  let httpMock: HttpTestingController;
  const API_CLASSES = 'http://localhost:3000/classes';
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
    TestBed.configureTestingModule({
      providers: [
        ClassService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ClassService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all classes', () => {
    service.getAllClasses().subscribe((classes: Class[]) => {
      expect(classes.length).toBe(2);
      expect(classes).toEqual(mockClasses);
    });

    const req = httpMock.expectOne(`${API_CLASSES}/all`);
    expect(req.request.method).toBe('GET');
    req.flush(mockClasses);
  });

  it('should retrieve class by ID', () => {
    const classId = 'class1';

    service.getClassById(classId).subscribe((classDetails: ClassDetails) => {
      expect(classDetails).toEqual(mockClassDetails);
    });

    const req = httpMock.expectOne(`${API_CLASSES}/one/${classId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockClassDetails);
  });
});
