import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersShowTimesComponent } from './theaters-show-times.component';

describe('TheatersShowTimesComponent', () => {
  let component: TheatersShowTimesComponent;
  let fixture: ComponentFixture<TheatersShowTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatersShowTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatersShowTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
