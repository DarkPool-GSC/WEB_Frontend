import { Component, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  @Output() onAddPaitentClose = new EventEmitter();
  constructor(public patientservice: PatientService) { }
  createPatient(email : string, password : string, name: string){
    this.patientservice.registerpatient(email, password, name);
    this.onAddPaitentClose.emit();

  }
}

