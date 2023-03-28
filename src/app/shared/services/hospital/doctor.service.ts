import { Injectable, NgZone } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { setDoc, getDoc, updateDoc, deleteDoc, doc, collection, getDocs } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
  async registerdoctor(e_mail: string, pass_word: string,name:string) {
    return signInWithEmailAndPassword(this.firebase, e_mail, pass_word).then((result) => {
      this.setDoctor(result.user,name)
      window.alert(`Account created succesfully!!, your Doctor ID is ${result.user.uid}`)
    }).catch((error) => {
      console.log(error)
    })
  }

  setDoctor(doctor: any,name:string | null) {
    const doctorref = doc(this.firestore, `doctors/${doctor.uid}`)
    const doctordata: Doctor = {
      uid: doctor.uid || null,
      Doctor_mail:doctor.Doctor_mail || null,
      Doctor_name: doctor.Doctor_name || name,
      Doctor_photourl: doctor.Doctor_photourl || null,
      Doctor_Qualification: doctor.Doctor_Qualification || null, 
      Doctor_Experience: doctor.Doctor_Experience || null,
      Doctor_specialization: doctor.Doctor_specialization || null,
    }
    return setDoc(doctorref, doctordata, {
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

