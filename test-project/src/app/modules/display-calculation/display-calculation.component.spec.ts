import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCalculationComponent } from './display-calculation.component';

describe('DisplayCalculationComponent', () => {
  let component: DisplayCalculationComponent;
  let fixture: ComponentFixture<DisplayCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
