import { Injectable, NgZone } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { setDoc, getDoc, updateDoc, deleteDoc, doc, collection, getDocs } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private firestore: Firestore,
    private router: Router,
    private ngzone: NgZone,
    private firebase: Auth

  ) { }
  

  async registerDoctor(doctor : any) {
    return createUserWithEmailAndPassword(this.firebase, doctor.email, doctor.password).then((result) => {
      this.setDoctor(result.user, doctor)
      window.alert(`Account created succesfully!!, your patient ID is ${result.user}`)
    }).catch((error) => {
      console.log(error)
      window.alert(error.message);
    })
  }

  async setDoctor(user : any, doctor: any) {
    console.log(user);
    const doctorref = doc(this.firestore, `doctors/${user.uid}`)
    const doctordata: Doctor = {
      uid: doctor.uid || null,
      Doctor_mail:doctor.Doctor_mail || null,
      Doctor_name: doctor.Doctor_name || name,
      Doctor_photourl: doctor.Doctor_photourl || null,
      Doctor_Qualification: doctor.Doctor_Qualification || null, 
      Doctor_Experience: doctor.Doctor_Experience || null,
      Doctor_specialization: doctor.Doctor_specialization || null,
    }
    return await setDoc(doctorref, doctordata, {
      merge: true,
    })
  }

  async DeleteDoctor(id: string) {
    const doctorref = doc(this.firestore, 'doctors', id)
    await deleteDoc(doctorref).then(() => {
      window.alert('Doctor deleted succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

  async UpdateDoctor(id: string, doctor: any) {
    const doctorref = doc(this.firestore, 'doctors', id)
    await updateDoc(doctorref, doctor).then(() => {
      window.alert('Doctor Updated succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

  async GetDoctor(id: string) {
    const docref = doc(this.firestore, 'doctors', id)
    const docsnap = await getDoc(docref)
    if (docsnap.exists()) {
      console.log('Doctor fetched succesfully', docsnap.data())
    } else {
      window.alert('No data found')
    }
  }

  async getAllDoctors() {
    const colref = collection(this.firestore, 'doctors')
    const docsnap = await getDocs(colref)
    docsnap.forEach(doc => {
      console.log(doc.data())
    })
  }
}

