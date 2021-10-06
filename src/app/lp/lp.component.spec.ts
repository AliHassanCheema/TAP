import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPComponent } from './lp.component';

describe('LPComponent', () => {
  let component: LPComponent;
  let fixture: ComponentFixture<LPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
