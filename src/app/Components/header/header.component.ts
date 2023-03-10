import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropDownState = true;
  constructor(){

  }
  openNavDropdown(){
    console.log("clicked");
    this.dropDownState = !this.dropDownState;
  }
}
