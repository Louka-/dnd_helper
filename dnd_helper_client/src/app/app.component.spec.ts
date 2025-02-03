import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() =>
    MockBuilder(AppComponent)
  );

  beforeEach(() => {
    fixture = MockRender(AppComponent);
    component = ngMocks.findInstance(
      AppComponent,
    );

    component.title = 'dnd_helper_client';
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'dnd_helper_client' title`, () => {
    expect(component.title).toEqual('dnd_helper_client');
  });
});
