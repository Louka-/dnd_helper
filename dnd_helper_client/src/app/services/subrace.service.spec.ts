import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { SubraceService } from './subrace.service';
import { Subrace } from '../models/subrace.model';
import { provideHttpClient } from '@angular/common/http';

describe('SubraceService', () => {
  let service: SubraceService;
  let httpMock: HttpTestingController;
  const API_SUBRACES = 'http://localhost:3000/subraces';
  const mockSubrace: Subrace = {
    index: 'subrace1',
    name: 'Subrace 1',
    desc: 'some description',
    ability_bonuses: [],
    starting_proficiencies: [],
    languages: [],
    racial_traits: [],
    url: 'api/subraces/subrace1',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SubraceService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(SubraceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve subrace by ID', () => {
    const subraceId = 'subrace1';

    service.getSubraceById(subraceId).subscribe((subrace: Subrace) => {
      expect(subrace).toEqual(mockSubrace);
    });

    const req = httpMock.expectOne(`${API_SUBRACES}/one/${subraceId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockSubrace);
  });
});
