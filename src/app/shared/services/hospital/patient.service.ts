import { Injectable, NgZone } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, updateDoc, getDoc, getDocs } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Patient } from '../../models/patient';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import { AuthService } from '../auth.service';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { count } from 'rxjs';
import { collectionGroup, getCountFromServer, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  patientCount = 0;
  pat:any;
  arr:any[];
  constructor(
    private firestore: Firestore,
    private router: Router,
    private ngzone: NgZone,
    private firebase: Auth

  ) {
    this.patientCount = 0;
    this.arr = []
    this.pat = null
   }

  async registerpatient(e_mail: string, pass_word: string,name:string) {
    return signInWithEmailAndPassword(this.firebase, e_mail, pass_word).then((result) => {
      this.setPatient(result.user, name)
      window.alert(`Account created succesfully!!, your patient ID is ${result.user.uid}`)
    }).catch((error) => {
      console.log(error)
    })
  }

  setPatient(patient: any, name : string | null ) {

    const patientRef = doc(this.firestore, `patients/${patient.uid}`);

    const patientData: Patient = {
      uid: patient.id || null,
      email: patient.email,
      display_name: patient.display_name || name,
      age: patient.age || null,
      phone_No: patient.phone_No || null,
      ailments: patient.ailments || null,
      Notes: patient.Notes || null,
      Medication_name: patient.Medication_name || null,
      Medication_Dose: patient.Medication_Dose || null,
      image_fieldurl: patient.Image || null,
      email_verified: patient.emailVerified || null
    }
    return setDoc(patientRef, patientData, {
      merge: true,
    });

  }


  async deletePatient(id: string) {
    const docref = doc(this.firestore, 'patients', id)
    await deleteDoc(docref).then(() => {
      window.alert('Patient deleted succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

  async get_updated_patient(id: string, name?: string, age?: number, phoneno?: string, ailments?: string) {
    const P: any = {
      display_name: name,
      age: age,
      phone_no: phoneno,
      ailments: ailments,
    }
    this.UpdatePatient(id, P)
  }
  async UpdatePatient(id: string, patient: any) {
    const docref = doc(this.firestore, 'patients', id)
    await updateDoc(docref, patient).then(() => {
      console.log('Patient updated succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

  async GetPatient(i_d: string) {
    const docref = doc(this.firestore, 'patients', i_d)
    const docsnap = await getDoc(docref)
    if (docsnap.exists()) {
      console.log('Patient Data:', docsnap.data())
      this.pat = docsnap.data()
      return this.pat
    } else {
      window.alert('No such documents')
    }
  }

  async GetAllPatients() {
    const colref = collection(this.firestore, 'patients')
    const docsnap = await getDocs(colref)
    this.arr =[];
    docsnap.forEach(doc => {
      var dat = doc.data()
      this.arr.push(dat)
    })
    return this.arr
  }
  
  async get_count(){
    const colref = collection(this.firestore, 'patients');
    this.patientCount =  await (await getCountFromServer(colref)).data().count;
    console.log(this.patientCount);
    return this.patientCount;
  }
}
