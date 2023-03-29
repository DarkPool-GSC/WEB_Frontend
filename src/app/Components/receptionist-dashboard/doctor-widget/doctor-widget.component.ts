import { Component } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/hospital/doctor.service';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctor-widget',
  templateUrl: './doctor-widget.component.html',
  styleUrls: ['./doctor-widget.component.css'],
})
export class DoctorWidgetComponent {
  faUserDoctor = faUserDoctor
  addDoctorModalState = false;
  openAddDoctorModal(value : boolean){
    this.addDoctorModalState = true;
  }
  onAddDoctorClose(arg : any){
    this.addDoctorModalState = false;
  }
  arr:any;
  constructor(public doctorservice: DoctorService) { 
    this.getAllDoctors();
  }
  async getAllDoctors (){
    this.arr = await this.doctorservice.getAllDoctors();
  }
}
