import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PatientFormComponent } from 'src/app/Components/patient-form/patient-form.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  openModal() {
    this.matDialog.open(PatientFormComponent, {
      "width": '6000px',
      "maxHeight": '90vh',
      "data": "John",
      "autoFocus": false
    });
  }
}
