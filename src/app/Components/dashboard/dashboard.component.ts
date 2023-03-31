import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Auth, authState } from '@angular/fire/auth';
import {doc,getDoc, Firestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  userCred : any;
  isRs =false;
  isDoc = false;
  constructor(private firestore : Firestore, private fireAuth: Auth, public authService : AuthService) {
    if(authService.userType === "Receptionist") this.isRs =  true;
    if(authService.userType === "Doctor") this.isDoc =  true;
    console.log("Tyep of user", authService.userType);
    authState(this.fireAuth).subscribe((user) => {
      if (user) {
        this.getUserData(user);
      }
    });
  }
  async getUserData(user : any){
    const userRef = doc(this.firestore, `users/${user.uid}`);
      await getDoc(userRef).then((result)=>{
        if(result){
          this.userCred = result.data();
          console.log("here")
          if(this.userCred.userType === "Receptionist") this.isRs =  true;
          if(this.userCred.userType === "Doctor") this.isDoc =  true;
          console.log(this.isDoc, this.isRs);
          return this.userCred;
          // this.userType = this.userData.userType;
        }
      })
  }
}
