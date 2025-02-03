import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { RaceService } from './race.service';
import { Race, RaceDetails } from '../models/race.model';
import { provideHttpClient } from '@angular/common/http';

describe('RaceService', () => {
  let service: RaceService;
  let httpMock: HttpTestingController;
  const API_RACES = 'http://localhost:3000/races';
  const mockRaces: Race[] = [
    { index: 'race1', name: 'Race 1', url: 'api/races' },
    { index: 'race2', name: 'Race 2', url: 'api/races' },
  ];

  const mockRaceDetails: RaceDetails = {
    index: 'race1',
    name: 'Race 1',
    url: 'api/race',
    ability_bonuses: [],
    age: 'string',
    alignment: 'string',
    language_desc: 'string',
    languages: [],
    size: 'string',
    size_description: 'string',
    speed: 5,
    starting_proficiencies: [],
    starting_proficiency_options: undefined,
    subraces: [],
    traits: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RaceService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(RaceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all races', () => {
    service.getAllRaces().subscribe((races: Race[]) => {
      expect(races.length).toBe(2);
      expect(races).toEqual(mockRaces);
    });

    const req = httpMock.expectOne(`${API_RACES}/all`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRaces);
  });

  it('should retrieve race by ID', () => {
    const raceId = 'race1';

    service.getRaceById(raceId).subscribe((raceDetails: RaceDetails) => {
      expect(raceDetails).toEqual(mockRaceDetails);
    });

    const req = httpMock.expectOne(`${API_RACES}/one/${raceId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRaceDetails);
  });
});
