import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSelectorComponent } from './race-selector.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { provideMockStore } from '@ngrx/store/testing';

describe('RaceSelectorComponent', () => {
  let component: RaceSelectorComponent;
  let fixture: ComponentFixture<RaceSelectorComponent>;

  beforeEach(() =>
    MockBuilder(RaceSelectorComponent).provide(
      provideMockStore({
        initialState: {},
      }),
    )
  );

  beforeEach(() => {
    fixture = MockRender(RaceSelectorComponent);
    component = ngMocks.findInstance(
      RaceSelectorComponent
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
