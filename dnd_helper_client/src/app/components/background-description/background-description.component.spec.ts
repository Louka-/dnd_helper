import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDescriptionComponent } from './background-description.component';

describe('BackgroundDescriptionComponent', () => {
  let component: BackgroundDescriptionComponent;
  let fixture: ComponentFixture<BackgroundDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
