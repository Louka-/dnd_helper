import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSelectorComponent } from './class-selector.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

describe('ClassSelectorComponent', () => {
  let component: ClassSelectorComponent;
  let fixture: ComponentFixture<ClassSelectorComponent>;

  beforeEach(() =>
    MockBuilder(ClassSelectorComponent).provide(
      provideMockStore({
        initialState: {},
      }),
    )
  );

  beforeEach(() => {
    fixture = MockRender(ClassSelectorComponent);
    component = ngMocks.findInstance(
      ClassSelectorComponent
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
