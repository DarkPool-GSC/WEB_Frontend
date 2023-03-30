import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorModalComponent {

}
