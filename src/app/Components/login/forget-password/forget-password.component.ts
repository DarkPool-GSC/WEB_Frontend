import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(public authService: AuthService) { }
}
