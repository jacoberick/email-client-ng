import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdBroadcastComponent } from './id-broadcast.component';

describe('IdBroadcastComponent', () => {
  let component: IdBroadcastComponent;
  let fixture: ComponentFixture<IdBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdBroadcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
