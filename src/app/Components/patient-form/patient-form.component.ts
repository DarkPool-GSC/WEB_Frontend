import { Component } from '@angular/core';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  constructor(public patientservice: PatientService) { }
}
