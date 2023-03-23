import { Component } from '@angular/core';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(public PatientService: PatientService) { }
}
