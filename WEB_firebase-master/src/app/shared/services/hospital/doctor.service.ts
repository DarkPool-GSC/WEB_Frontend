import { Injectable, NgZone } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { setDoc, getDoc, updateDoc, deleteDoc, doc, collection, getDocs } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

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

  setDoctor(doctor: any) {
    const doctorref = doc(this.firestore, `doctors/${doctor.uid}`)
    const doctordata: Doctor = {
      uid: doctor.uid,
      Doctor_name: doctor.Doctor_name,
      Doctor_photourl: doctor.Doctor_photourl,
      Doctor_Qualification: doctor.Doctor_Qualification,
      Doctor_Experience: doctor.Doctor_Experience,
      Doctor_specialization: doctor.Doctor_specialization,
    }
    return setDoc(doctorref, doctordata, {
      merge: true,
    })
  }

  async DeleteDoctor(id: string) {
    const doctorref = doc(this.firestore, 'doctors', id)
    await deleteDoc(doctorref).then(() => {
      console.log('Doctor deleted succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

  async UpdateDoctor(id: string, doctor: any) {
    const doctorref = doc(this.firestore, 'doctors', id)
    await updateDoc(doctorref, doctor).then(() => {
      console.log('Doctor Updated succesfully')
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
      console.log('No data found')
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

