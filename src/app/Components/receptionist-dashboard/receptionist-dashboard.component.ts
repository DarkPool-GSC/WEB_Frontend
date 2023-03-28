import { Component } from '@angular/core';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';
@Component({
  selector: 'app-receptionist-dashboard',
  templateUrl: './receptionist-dashboard.component.html',
  styleUrls: ['./receptionist-dashboard.component.css']
})
export class ReceptionistDashboardComponent {
  patients = [{}];
  constructor(public patientservice: PatientService) {
    this.getAllPatients();
   }
   async getAllPatients(){
    this.patients = await this.patientservice.GetAllPatients();
    console.log(this.patients)
   }
}
