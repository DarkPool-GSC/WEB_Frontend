import { ChangeDetectionStrategy, Component , Output, EventEmitter} from '@angular/core';

import { DoctorService } from 'src/app/shared/services/hospital/doctor.service';
@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorFormComponent {
  @Output() onAddDoctorClose = new EventEmitter();
  doctor = {
    email : "",
    password : "",
    name : "",
    Doctor_Qualification: "",

    Doctor_photourl :"",
    Doctor_Experience : "",
    Doctor_specialization : "",
  }
  constructor(public doctorService : DoctorService) {
   
  }
  createDoctor(email  : string, password : string, name : string){
    this.doctor.email = email;
    this.doctor.password = password;
    this.doctor.name = name;
    this.doctorService.registerDoctor(this.doctor);
  }
}
