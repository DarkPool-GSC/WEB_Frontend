import { Component, Output, EventEmitter} from '@angular/core';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  @Output() onAddDetailsClose = new EventEmitter();
  constructor(public patientservice: PatientService) { }
  AddPatientDetails(id: string, name?: string, age?: number, phoneno?: string, ailments?: string) {
    this.patientservice.get_updated_patient(id, name, age, phoneno, ailments);
    this.onAddDetailsClose.emit()
  }
}
