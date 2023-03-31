import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/hospital/doctor.service';

@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DoctorModalComponent {
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
