import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawPartComponent } from './raw-part.component';

describe('RawPartComponent', () => {
  let component: RawPartComponent;
  let fixture: ComponentFixture<RawPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
