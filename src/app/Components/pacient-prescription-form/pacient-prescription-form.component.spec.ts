import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientPrescriptionFormComponent } from './pacient-prescription-form.component';

describe('PacientPrescriptionFormComponent', () => {
  let component: PacientPrescriptionFormComponent;
  let fixture: ComponentFixture<PacientPrescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientPrescriptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientPrescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
