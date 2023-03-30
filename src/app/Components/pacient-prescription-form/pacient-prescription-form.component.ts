import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PerscriptionService } from 'src/app/shared/services/hospital/perscription.service';
@Component({
  selector: 'app-pacient-prescription-form',
  templateUrl: './pacient-prescription-form.component.html',
  styleUrls: ['./pacient-prescription-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PacientPrescriptionFormComponent {
  medicines = [{medicine : "", dosage : "", comment : ""}];
  prescription = "";
  constructor(public prescriptionService : PerscriptionService) {}
  addMoreMedicine(){
    this.medicines.push({medicine : "", dosage : "", comment : ""})
  }
  onEnter(value: string, indexOfelement :number, type: string) { 
    if(type==='medicine') this.medicines[indexOfelement]['medicine'] = value;
    if(type==='dosage') this.medicines[indexOfelement]['dosage'] = value;
    if(type==='comment') this.medicines[indexOfelement]['comment'] = value;
   }
   
   async onSubmit(prescription: string){
    console.log(this.medicines, prescription);
    window.alert("The prescription is sent to patient successfully")
    const prec = {
      doctor : "very good doctor",
      patient :"Ill guy",
      prescription : prescription
    }
    await this.prescriptionService.addPrescription(prec, this.medicines)
   }
}
