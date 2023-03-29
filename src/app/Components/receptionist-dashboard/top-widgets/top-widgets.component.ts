import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { DoctorService } from 'src/app/shared/services/hospital/doctor.service';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';


@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  faStethoscope = faStethoscope
  faHeart = faHeart
  modalState1 = false;
  modalState2 = false;
  addDoctorModalState = false;
  patientCount = 0;
  doctorCount = 0;
  constructor(public patientservice: PatientService, public doctorservice: DoctorService) {
    this.updatePatientCount();
    this.updateDoctorCount();
   }
  toggleModal1(value : boolean){
    this.modalState1 = value;
  }
  openAddDoctorModal(value : boolean){
    this.addDoctorModalState = true;
  }
  onAddDoctorClose(arg : any){
    this.addDoctorModalState = false;
  }
  onAddPatientClose(arg : any){
    this.modalState1 = false;
  }

  toggleModal2(value : boolean){
    this.modalState2 = value;
  }

  onAddDetailsClose(arg : any){
    this.modalState2 = false;
  }


  async updatePatientCount (){
    this.patientCount = await this.patientservice.get_count();
  }

  async updateDoctorCount () {
    this.doctorCount = await this.doctorservice.get_count()
  }
}
