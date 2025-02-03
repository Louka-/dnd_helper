import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperCreatorComponent } from './stepper-creator.component';
import { RaceSelectorComponent } from '../race-selector/race-selector.component';
import { ClassSelectorComponent } from '../class-selector/class-selector.component';
import { BackgroundSelectorComponent } from '../background-selector/background-selector.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Observable, of } from 'rxjs';
import { RaceDetails } from '../../models/race.model';
import { ClassDetails } from '../../models/class.model';
import { BackgroundDetails } from '../../models/background.model';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

describe('StepperCreatorComponent', () => {
  let component: StepperCreatorComponent;
  let fixture: ComponentFixture<StepperCreatorComponent>;

  beforeEach(() =>
    MockBuilder(StepperCreatorComponent)
      .mock(RaceSelectorComponent)
      .mock(ClassSelectorComponent)
      .mock(BackgroundSelectorComponent)
  );

  beforeEach(() => {
    fixture = MockRender(StepperCreatorComponent);
    component = ngMocks.findInstance(
      StepperCreatorComponent,
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit step event on step change', () => {
    const steSpy = jest.spyOn(component.step, 'emit');
    const event: StepperSelectionEvent = { selectedIndex: 1, previouslySelectedIndex: 0, selectedStep: null as any, previouslySelectedStep: null as any };
    component.onStepChange(event);
    expect(steSpy).toHaveBeenCalledWith(1);
  });

  it('should emit raceToDisplay event when race is selected', () => {
    const raceEmitSpy = jest.spyOn(component.raceToDisplay, 'emit');
    const raceDetails$: Observable<RaceDetails> = of({
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
  });
    component.onRaceToDisplay(raceDetails$);
    expect(raceEmitSpy).toHaveBeenCalledWith(raceDetails$);
  });

  it('should emit classToDisplay event when class is selected', () => {
    const classEmitSpy = jest.spyOn(component.classToDisplay, 'emit');
    const classDetails$: Observable<ClassDetails> = of({
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
  });
    component.onClassToDisplay(classDetails$);
    expect(classEmitSpy).toHaveBeenCalledWith(classDetails$);
  });

  it('should emit backgroundToDisplay event when background is selected', () => {
    const backgroundEmitSpy = jest.spyOn(component.backgroundToDisplay, 'emit');
    const backgroundDetails$: Observable<BackgroundDetails> = of({
    index: 'background1',
    name: 'Background 1',
    starting_proficiencies: [],
    language_options: [],
    starting_equipment: [],
    starting_equipment_options: [],
    url: 'api/backgrounds/background1',
  });
    component.onBackgroundToDisplay(backgroundDetails$);
    expect(backgroundEmitSpy).toHaveBeenCalledWith(backgroundDetails$);
  });
});
