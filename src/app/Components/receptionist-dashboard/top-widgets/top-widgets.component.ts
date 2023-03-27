import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
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
  patientCount = 0;
  constructor(public patientservice: PatientService) {
    this.updatePatientCount();
   }
  toggleModal1(value : boolean){
    this.modalState1 = value;
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
}
