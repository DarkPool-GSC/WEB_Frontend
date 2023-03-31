import { Injectable, NgZone } from '@angular/core';

import { Firestore, collectionData, collection, doc, setDoc, getDoc } from '@angular/fire/firestore';
import {
  Auth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  user
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userType = "";
  userData: any;
  constructor(
    private fireAuth: Auth, private firestore: Firestore,
    private router: Router, private ngZone: NgZone
  ) {
    authState(this.fireAuth).subscribe((user) => {
      if (user) {
        this.getUserData(user);
        this.userData = user;
        
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  async getUserData(user : any){
    const userRef = doc(this.firestore, `users/${user.uid}`);
      await getDoc(userRef).then((result)=>{
        if(result){
          this.userData = result.data();
          console.log(this.userData)
          this.userType = this.userData.userType;
        }
      })
  }
  async Login(email: string, password: string) {
    await signInWithEmailAndPassword(this.fireAuth, email, password).then(async (result) => {
    const userRef = doc(this.firestore, `users/${result.user.uid}`);
      await getDoc(userRef).then((result)=>{
        if(result){
          this.userData = result.data();
          console.log(this.userData)
          this.userType = this.userData.userType;
        }
      })
      authState(this.fireAuth).subscribe((user) => {
        if (user) {
          if (!user.emailVerified) {
            window.alert("Verify your email first");
            return;
          }
          else {
            this.router.navigate(['patient-prescription'])
          }
        }
      })
    }).catch((error) => {
      window.alert(error.message);
    })
  }

  async Register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.fireAuth, email, password).then((result) => {
      this.userType =  "";
      this.SendVerificationMail();
      this.setUser(result.user);
    }).catch((error) => {
      window.alert(error.message);
    })
  }
  async SendVerificationMail() {
    const user = this.fireAuth.currentUser;
    if (user) {
      sendEmailVerification(user).then(() => {
        this.router.navigate(['verify-email'])
      })
    }

  }
  setUser(user: any) {
    console.log("This is user id", user.uid, user);
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      userType : ""
    }
    return setDoc(userRef, userData, {
      merge: true,
    });

  }
  async SignOut() {
    return signOut(this.fireAuth).then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
  async ForgotPassword(passwordResetEmail: string) {
    return sendPasswordResetEmail(this.fireAuth, passwordResetEmail).then(() => {
      window.alert("Password reset mail send");
    }).catch((error) => {
      window.alert(error.message);
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  async GoogleAuth() {
    signInWithPopup(this.fireAuth, new GoogleAuthProvider).then((result) => {
      this.router.navigate(['patient-prescription']);
      this.setUser(result.user);
    }).catch((error) => {
      window.alert(error);
    })
  }

}
