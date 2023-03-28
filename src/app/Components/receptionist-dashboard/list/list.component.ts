import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/services/hospital/patient.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  transactions = [
    {
      id: 1,
      display_name: "Adhishraya Sharma",
      price: "12345",
      shop: "Tech Pro",
      location: "Diabetes",
      status: "In-Treatment",
      imgSrc: "https://spec.nith.ac.in/Team%20Page/assets/team_images/Adhishraya.jpg"
    },
    {
      id: 2,
      display_name: "Adhishraya Sharma",
      price: "23456",
      shop: "Pick the best",
      location: "Diabetes",
      status: "In-Treatment",
      imgSrc: "https://spec.nith.ac.in/Team%20Page/assets/team_images/Adhishraya.jpg"
    },
    {
      id: 3,
      display_name: "Adhishraya Sharma",
      price: "34567",
      shop: "Quality Leathers",
      location: "Diabetes",
      status: "In-Treatment",
      imgSrc: "https://spec.nith.ac.in/Team%20Page/assets/team_images/Adhishraya.jpg"
    }
  ];
  patients = [{}];
  constructor(public patientservice: PatientService) {
    this.getAllPatients();
   }
   async getAllPatients(){
    // this.transactions = await this.patientservice.GetAllPatients();
    console.log(this.patients)
   }

  ngOnInit(): void {
  }
}
