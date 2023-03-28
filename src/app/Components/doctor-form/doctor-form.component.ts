import { Component, Output, EventEmitter } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/hospital/doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent {
  @Output() onAddDoctorClose = new EventEmitter();
  constructor(public doctorservice: DoctorService) { }
  createDoctor(email : string, password : string, name: string){
    this.doctorservice.registerdoctor(email, password, name);
    this.onAddDoctorClose.emit();
  }
}