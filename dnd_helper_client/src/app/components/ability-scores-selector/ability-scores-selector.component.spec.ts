import { AbilityScoresSelectorComponent } from './ability-scores-selector.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { draftCharacterActions } from '../../store/draft-character-state/draft-character.actions';
import { MockBuilder, MockRender, MockRenderFactory, ngMocks } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AbilityScoresSelectorComponent', () => {
  let component: AbilityScoresSelectorComponent;
  let fixture: ComponentFixture<AbilityScoresSelectorComponent>;
  let store: MockStore;

  beforeEach(() =>
    MockBuilder(AbilityScoresSelectorComponent).provide(
      provideMockStore())
  );

  beforeEach(() => {
    fixture = MockRender(AbilityScoresSelectorComponent);
    component = ngMocks.findInstance(
      AbilityScoresSelectorComponent,
    );

    component.abilityScore = 10;
    component.racialBonus = 2;
    component.abilityName = 'Strength';
    component.abilityIndex = 'strength';
    component.disableAddButton = false;
    component.abilityMod = '(+2)';
    component.maxValue = 20;
    component.minValue = 8;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  })

  const factory = MockRenderFactory(AbilityScoresSelectorComponent);
  beforeEach(() => factory.configureTestBed());

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call increment() when increment button is clicked', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch').mockImplementation();
    const incrementButton = ngMocks.findAll('button');
    ngMocks.click(incrementButton[1]);
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(draftCharacterActions.increaseAbilityBonus({ index: 'strength' }));
    expect(component.abilityScore).toBe(11);
    expect(component.abilityScore).toBeLessThan(component.maxValue);
  });

  it('should call decrement() when decrement button is clicked', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch').mockImplementation();
    component.decrement('strength');
    expect(dispatchSpy).toHaveBeenCalledWith(draftCharacterActions.decreaseAbilityBonus({ index: 'strength' }));
    expect(component.abilityScore).toBe(9);
    expect(component.minValue).toBeLessThan(component.abilityScore);
  });

  it('should not increment ability score when score is at max value and disableAddButton is false', () => {
    component.abilityScore = component.maxValue;
    component.disableAddButton = false;
    fixture.detectChanges();

    const dispatchSpy = jest.spyOn(store, 'dispatch').mockImplementation();
    const removePointSpy = jest.spyOn(component.removePointEvent, 'emit');
    component.increment('strength');

    expect(dispatchSpy).not.toHaveBeenCalled();
    expect(removePointSpy).not.toHaveBeenCalled();
    expect(component.abilityScore).toBe(component.maxValue);
  });

  it('should disable increment button when max value is reached', () => {
    component.abilityScore = 20;
    fixture.detectChanges();

    const incrementButton = ngMocks.findAll('button')[1];
    expect(incrementButton.attributes['ng-reflect-disabled']).toBe('true');
  });

  it('should disable increment button when disableAddButton is true', () => {
    component.disableAddButton = true;
    fixture.detectChanges();

    const incrementButton = ngMocks.findAll('button')[1];
    expect(incrementButton.attributes['ng-reflect-disabled']).toBe('true');
  });

  it('should disable decrement button when min value is reached', () => {
    component.abilityScore = 8;
    fixture.detectChanges();

    const decrementButton = ngMocks.findAll('button')[0];
    expect(decrementButton.attributes['ng-reflect-disabled']).toBe('true');
  });

  it('should emit addPointEvent when decrement is called', () => {
    const addPointSpy = jest.spyOn(component.addPointEvent, 'emit');
    component.decrement('strength');
    expect(addPointSpy).toHaveBeenCalled();
  });

  it('should emit removePointEvent when increment is called', () => {
    const removePointSpy = jest.spyOn(component.removePointEvent, 'emit');
    component.increment('strength');
    expect(removePointSpy).toHaveBeenCalled();
  });

  it('should display the correct ability name and score', () => {
    const spans = ngMocks.findAll('div > span');

    expect(spans[0].nativeElement.textContent).toBe('Strength');
    expect(spans[1].nativeElement.textContent).toBe('+2');
    expect(spans[2].nativeElement.textContent).toBe('10');
    expect(spans[3].nativeElement.textContent).toBe('(+2)');
  });
});
