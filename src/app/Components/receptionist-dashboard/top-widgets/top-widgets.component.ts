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
  modalState = false;
  constructor(public patientservice: PatientService) { }
  toggleModal(value : boolean){
    this.modalState = value;
  }
}
