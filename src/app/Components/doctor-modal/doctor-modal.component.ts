import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/hospital/doctor.service';

@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DoctorModalComponent {
  arr = [{Doctor_name : "sddvss", Doctor_specialization : "kiyfuy"}, {Doctor_name : "sddvss", Doctor_specialization : "iygiy"}];
  constructor(public doctorservice: DoctorService) { 
    this.getAllDoctors();
  }
  async getAllDoctors (){
    this.arr = await this.doctorservice.getAllDoctors();
  }
}
