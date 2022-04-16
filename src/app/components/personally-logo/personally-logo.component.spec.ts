import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonallyLogoComponent } from './personally-logo.component';

describe('PersonallyLogoComponent', () => {
  let component: PersonallyLogoComponent;
  let fixture: ComponentFixture<PersonallyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonallyLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonallyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
