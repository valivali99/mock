import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialComponent } from './raw-material.component';

describe('RawMaterialComponent', () => {
  let component: RawMaterialComponent;
  let fixture: ComponentFixture<RawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
