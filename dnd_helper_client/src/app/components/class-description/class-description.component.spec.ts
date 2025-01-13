import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDescriptionComponent } from './class-description.component';

describe('ClassDescriptionComponent', () => {
  let component: ClassDescriptionComponent;
  let fixture: ComponentFixture<ClassDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
