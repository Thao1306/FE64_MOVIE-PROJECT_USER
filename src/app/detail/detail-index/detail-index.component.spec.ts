import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIndexComponent } from './detail-index.component';

describe('DetailIndexComponent', () => {
  let component: DetailIndexComponent;
  let fixture: ComponentFixture<DetailIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
