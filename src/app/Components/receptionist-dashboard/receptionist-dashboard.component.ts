import { Component } from '@angular/core';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { DoctorService } from 'src/app/shared/services/hospital/doctor.service';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';
@Component({
  selector: 'app-receptionist-dashboard',
  templateUrl: './receptionist-dashboard.component.html',
  styleUrls: ['./receptionist-dashboard.component.css']
})
export class ReceptionistDashboardComponent {
  patients = [{}];
  doctors = [{}];
  constructor(public patientservice: PatientService, public doctorservice: DoctorService) {
    this.getAllPatients();
    this.getAllDoctors();
   }
   async getAllPatients(){
    this.patients = await this.patientservice.GetAllPatients();
    console.log(this.patients)
   }

   async getAllDoctors(){
    this.doctors = await this.doctorservice.getAllDoctors();
   }
}
