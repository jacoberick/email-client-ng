import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBotLandingComponent } from './top-bot-landing.component';

describe('TopBotLandingComponent', () => {
  let component: TopBotLandingComponent;
  let fixture: ComponentFixture<TopBotLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBotLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBotLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
