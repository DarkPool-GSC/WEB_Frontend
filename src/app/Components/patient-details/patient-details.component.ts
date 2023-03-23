import { Component } from '@angular/core';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  constructor(public patientservice :PatientService){}
}
