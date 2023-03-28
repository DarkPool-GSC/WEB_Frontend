import { Component } from '@angular/core';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public authService: AuthService) { }
  faRightToBracket = faRightToBracket
}
