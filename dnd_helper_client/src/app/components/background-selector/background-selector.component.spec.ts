import { BackgroundSelectorComponent } from './background-selector.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { selectAllBackgrounds, selectBackgroundById, selectBackgroundDetails } from '../../store/background-state/background.selectors';
import { backgroundsActions } from '../../store/background-state/background.actions';
import { EventEmitter } from '@angular/core';
import { Background, BackgroundDetails } from '../../models/background.model';
import * as selectBackgrounds from '../../store/background-state/background.selectors';

describe('BackgroundSelectorComponent', () => {
  let component: BackgroundSelectorComponent;
  let fixture: ComponentFixture<BackgroundSelectorComponent>;
  let store: MockStore;

  const mockBackgrounds: Background[] = [
    { index: 'background1', name: 'Background 1', url:'api/background1' },
    { index: 'background2', name: 'Background 2', url:'api/background2' },
  ];

  const mockBackgroundDetails: BackgroundDetails[] = [
    {
      index: 'background1',
      name: 'Background 1',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url:'api/background1'
    },
    {
      index: 'background2',
      name: 'Background 2',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url:'api/background2'
    },
  ];

  beforeEach(() =>
    MockBuilder(BackgroundSelectorComponent)
      .provide(provideMockStore({
        selectors: [
          { selector: selectAllBackgrounds, value: mockBackgrounds },
          { selector: selectBackgroundDetails, value: mockBackgroundDetails },
          { selector: selectBackgroundById('background1'), value: mockBackgroundDetails[0] },
          { selector: selectBackgroundById('background2'), value: mockBackgroundDetails[1] },
        ],
      }))
  );

  beforeEach(() => {
    fixture = MockRender(BackgroundSelectorComponent);
    component = ngMocks.findInstance(BackgroundSelectorComponent);
    store = TestBed.inject(MockStore);

    store.overrideSelector(selectAllBackgrounds, mockBackgrounds);
    store.overrideSelector(selectBackgroundById('background1'), mockBackgroundDetails[0]);
    store.overrideSelector(selectBackgroundById('background2'), mockBackgroundDetails[1]);
    store.overrideSelector(selectBackgroundDetails, mockBackgroundDetails);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getAllBackgrounds on init', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(backgroundsActions.getAllBackgrounds());
  });

  it('should call getBackgroundById and dispatch getBackgroundByIdFromApi if background is not available in store', () => {
    const mockSelect = jest.spyOn(selectBackgrounds, 'selectBackgroundDetails').mockImplementation(
      () => [{
        index: 'background1',
        name: 'Background 1',
        starting_proficiencies: [],
        language_options: [],
        starting_equipment: [],
        starting_equipment_options: [],
        url:'api/background1'
      },
      {
        index: 'background2',
        name: 'Background 2',
        starting_proficiencies: [],
        language_options: [],
        starting_equipment: [],
        starting_equipment_options: [],
        url:'api/background2'
      },]);
    const mockSelect2 = jest.spyOn(selectBackgrounds, 'selectBackgroundById').mockImplementation(() =>
      createSelector(
        () => undefined as BackgroundDetails | undefined,
      )
    );
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const emitBackgroundToDisplaySpy = jest.spyOn(component.backgroundToDisplay, 'emit');
    component.selectedBackground = 'background3';
    component.getBackgroundById();

    expect(mockSelect).toHaveBeenCalled();
    expect(mockSelect2).toHaveBeenCalledWith('background3');
    expect(emitBackgroundToDisplaySpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith(backgroundsActions.getBackgroundByIdFromApi({
      index: 'background3'
    }));
  });

  // it('should emit background details observable', () => {
  //   component.selectedBackground = 'background1';
  //   const emitSpy = jest.spyOn(component.backgroundToDisplay, 'emit');

  //   component.getBackgroundById();

  //   expect(emitSpy).toHaveBeenCalledWith(expect.anything());
  // });


  // it('should dispatch correct actions when getBackgroundById is called and background is available in store', () => {
  //   component.selectedBackground = 'background1';
  //   store.overrideSelector(selectBackgroundById('background1'), mockBackgroundDetails[0]);
  //   fixture.detectChanges();
  //   const dispatchSpy = jest.spyOn(store, 'dispatch');
  //   component.getBackgroundById();
  //   expect(dispatchSpy).toHaveBeenCalledWith(
  //     backgroundsActions.getBackgroundFromStore({ backgroundDetails: mockBackgroundDetails[0] })
  //   );
  // });

  // it('should dispatch correct actions when getBackgroundById is called and background is not available in store', () => {
  //   component.selectedBackground = 'background3';
  //   console.log('selectedBackground:', component.selectedBackground);

  //   store.overrideSelector(selectBackgroundById('background3'), undefined);
  //   fixture.detectChanges();

  //   const dispatchSpy = jest.spyOn(store, 'dispatch');
  //   component.getBackgroundById();
  //   expect(dispatchSpy).toHaveBeenCalledWith(
  //     backgroundsActions.getBackgroundByIdFromApi({ index: 'background3' })
  //   );
  // });

  it('should emit backgroundDetails$ observable', () => {
    const mockBackgroundDetails =     {
      index: 'background1',
      name: 'Background 1',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url:'api/background1'
    };
    store.overrideSelector(selectBackgroundById('background1'), mockBackgroundDetails);

    component.selectedBackground = 'background1';
    component.backgroundToDisplay.subscribe(obs => {
      obs.subscribe(details => {
        expect(details).toEqual(mockBackgroundDetails);
      });
    });
  });

  it('should display the correct backgrounds in the select dropdown', () => {
    const options = ngMocks.findAll('mat-option');
    expect(options.length).toBe(mockBackgrounds.length);
    expect(options[0].nativeElement.textContent.trim()).toBe(mockBackgrounds[0].name);
    expect(options[1].nativeElement.textContent.trim()).toBe(mockBackgrounds[1].name);
  });

  // it('should call getBackgroundById when a background is selected', () => {
  //   const getBackgroundByIdSpy = jest.spyOn(component, 'getBackgroundById');
  //   const select = ngMocks.find('mat-select');
  //   ngMocks.change(select, 'background1');
  //   fixture.detectChanges();
  //   expect(getBackgroundByIdSpy).toHaveBeenCalled();
  // });
});
