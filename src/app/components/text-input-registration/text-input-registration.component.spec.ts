import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputRegistrationComponent } from './text-input-registration.component';

describe('TextInputRegistrationComponent', () => {
  let component: TextInputRegistrationComponent;
  let fixture: ComponentFixture<TextInputRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
