import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingFormComponent } from './holding-form.component';

describe('HoldingFormComponent', () => {
  let component: HoldingFormComponent;
  let fixture: ComponentFixture<HoldingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
