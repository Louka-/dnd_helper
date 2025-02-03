import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundDescriptionComponent } from './background-description.component';
import { of } from 'rxjs';
import { BackgroundDetails } from '../../models/background.model';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

describe('BackgroundDescriptionComponent', () => {
  let component: BackgroundDescriptionComponent;
  let fixture: ComponentFixture<BackgroundDescriptionComponent>;

  const mockBackgroundDetails: BackgroundDetails = {
    index: 'test background',
    name: 'Test Background',
    starting_equipment: [{ index: 'sword', name: 'Sword', quantity: 1, url: 'api/test' }],
    starting_proficiencies: [{ index: 'archery', name: 'Archery', url: 'api/test' }],
    starting_equipment_options: [],
    url: 'api/test/backgrounds'
  };

  beforeEach(() =>
    MockBuilder(BackgroundDescriptionComponent)
  );

  beforeEach(() => {
    fixture = MockRender(BackgroundDescriptionComponent);
    component = ngMocks.findInstance(
      BackgroundDescriptionComponent,
    );
    component.backgroundDetails$ = of(mockBackgroundDetails);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display background name', () => {
    const name = ngMocks.findAll('p')[0];
    expect(name.nativeElement.textContent).toBe('Test Background');
  });

  it('should display starting equipment', () => {
    const equipment = ngMocks.findAll('div > p')[0];
    expect(equipment.nativeElement.textContent).toContain('Sword');
  });

  it('should display starting proficiencies', () => {
    const proficiency = ngMocks.findAll('div > p')[1];
    expect(proficiency.nativeElement.textContent).toContain('Archery');
  });
});
