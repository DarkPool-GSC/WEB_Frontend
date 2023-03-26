import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  transactions = [
    {
      id: 1,
      title: "Adhishraya Sharma",
      price: "12345",
      shop: "Tech Pro",
      location: "Diabetes",
      status: "In-Treatment",
      imgSrc: "https://spec.nith.ac.in/Team%20Page/assets/team_images/Adhishraya.jpg"
    },
    {
      id: 2,
      title: "Adhishraya Sharma",
      price: "23456",
      shop: "Pick the best",
      location: "Diabetes",
      status: "In-Treatment",
      imgSrc: "https://spec.nith.ac.in/Team%20Page/assets/team_images/Adhishraya.jpg"
    },
    {
      id: 3,
      title: "Adhishraya Sharma",
      price: "34567",
      shop: "Quality Leathers",
      location: "Diabetes",
      status: "In-Treatment",
      imgSrc: "https://spec.nith.ac.in/Team%20Page/assets/team_images/Adhishraya.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
