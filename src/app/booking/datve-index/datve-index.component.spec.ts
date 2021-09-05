import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeIndexComponent } from './datve-index.component';

describe('DatVeIndexComponent', () => {
  let component: DatVeIndexComponent;
  let fixture: ComponentFixture<DatVeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatVeIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
