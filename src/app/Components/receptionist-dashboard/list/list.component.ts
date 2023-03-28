import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  arr:any;
  constructor(public patientservice: PatientService) { 
    this.GetAllPatients();
  }
  async GetAllPatients (){
    this.arr = await this.patientservice.GetAllPatients();
  }
}
