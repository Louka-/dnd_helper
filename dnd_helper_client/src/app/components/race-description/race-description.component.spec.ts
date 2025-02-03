import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaceDescriptionComponent } from './race-description.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { RaceDetails } from '../../models/race.model';
import { of } from 'rxjs';

describe('RaceDescriptionComponent', () => {
  let component: RaceDescriptionComponent;
  let fixture: ComponentFixture<RaceDescriptionComponent>;

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

  beforeEach(() =>
    MockBuilder(RaceDescriptionComponent)
  );

  beforeEach(() => {
    fixture = MockRender(RaceDescriptionComponent);
    component = ngMocks.findInstance(
      RaceDescriptionComponent
    );
    component.raceDetails$ = of(mockRaceDetails);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
