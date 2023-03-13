import { Injectable, NgZone } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import * as auth from 'firebase/auth';
// import {
//   AngularFirestore,
//   AngularFirestoreDocument,
// } from '@angular/fire/compat/firestore';

import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import {   Auth,
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
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:  any;
  constructor(
    private fireAuth :  Auth,  private firestore :Firestore,
    private router : Router, private ngZone : NgZone
    ) { 
      authState(this.fireAuth).subscribe((user) => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });
     }

  async Login (email :  string, password: string){
    return signInWithEmailAndPassword(this.fireAuth, email, password).then((result) =>{
      this.setUser(result.user);
      authState(this.fireAuth).subscribe((user)=>{
        if(user){
          if(!user.emailVerified){
            window.alert("Verify your email first");
            return;
          }
          else{

            this.router.navigate(['dashboard'])
          }
        }
      })
    }).catch((error)=>{
      window.alert(error.message);
   })
  }

  async Register(email: string, password : string){
    return createUserWithEmailAndPassword(this.fireAuth,email,password).then((result)=>{
      this.SendVerificationMail();
      this.setUser(result.user);
    }).catch((error)=>{
      window.alert(error.message);
    })
  }
  async SendVerificationMail(){
    const user = this.fireAuth.currentUser;
    console.log("In process")
    if(user){
      console.log("sending mail to ", user);
      sendEmailVerification(user).then(()=>{
        this.router.navigate(['verify-email'])
      })
    }
    
  } 
  setUser (user : any){
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName : user.displayName,
      photoURL : user.photoURL,
      emailVerified : user.emailVerified
    }
    return setDoc(userRef, userData, {
      merge: true,
    });

  }
  async SignOut(){
    return signOut(this.fireAuth).then(()=>{
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
  async ForgotPassword(passwordResetEmail : string){
    return sendPasswordResetEmail(this.fireAuth,passwordResetEmail).then(()=>{
      window.alert("Password reset mail send");
    }).catch((error)=>{
      window.alert(error.message);
    })
  }

  get isLoggedIn() : boolean {
    const user  = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !==false ? true : false;
  }

  async GoogleAuth(){
    signInWithPopup(this.fireAuth, new GoogleAuthProvider).then((result) =>{
          this.router.navigate(['dashboard']);
          this.setUser(result.user);
          console.log(result);
        }).catch((error)=>{
          window.alert(error);
        })
  }
  
  // async AuthLogin(provider : any) {
  //   return this.fireAuth.signInWithPopup(provider).then((result) =>{
  //     this.router.navigate(['dashboard']);
  //     this.setUser(result.user);

  //   }).catch((error)=>{
  //     window.alert(error);
  //   })
  // }
}
