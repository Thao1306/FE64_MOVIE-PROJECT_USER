import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComingComponent } from './movie-coming.component';

describe('MovieComingComponent', () => {
  let component: MovieComingComponent;
  let fixture: ComponentFixture<MovieComingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieComingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
