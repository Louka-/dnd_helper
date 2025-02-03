import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { BackgroundService } from './background.service';
import { Background, BackgroundDetails } from '../models/background.model';
import { provideHttpClient } from '@angular/common/http';

describe('BackgroundService', () => {
  let service: BackgroundService;
  let httpMock: HttpTestingController;
  const API_BACKGROUND = 'http://localhost:3000/backgrounds';
  const mockBackgrounds: Background[] = [
    { index: 'background1', name: 'Background 1', url: 'api/backgrounds' },
    { index: 'background2', name: 'Background 2', url: 'api/backgrounds' },
  ];

  const mockBackgroundDetails: BackgroundDetails = {
    index: 'background1',
    name: 'Background 1',
    starting_proficiencies: [],
    language_options: [],
    starting_equipment: [],
    starting_equipment_options: [],
    url: 'api/backgrounds/background1',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BackgroundService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(BackgroundService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all backgrounds', () => {
    service.getAllBackgrounds().subscribe((backgrounds: Background[]) => {
      expect(backgrounds.length).toBe(2);
      expect(backgrounds).toEqual(mockBackgrounds);
    });

    const req = httpMock.expectOne(`${API_BACKGROUND}/all`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBackgrounds);
  });

  it('should retrieve background by ID', () => {
    const backgroundId = 'background1';

    service.getBackgroundById(backgroundId).subscribe((backgroundDetails: BackgroundDetails) => {
      expect(backgroundDetails).toEqual(mockBackgroundDetails);
    });

    const req = httpMock.expectOne(`${API_BACKGROUND}/one/${backgroundId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBackgroundDetails);
  });
});
