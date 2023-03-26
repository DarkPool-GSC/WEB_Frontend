import { Injectable, NgZone } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, updateDoc, getDoc, getDocs } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Patient } from '../../models/patient';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import { AuthService } from '../auth.service';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collectionGroup, getCountFromServer, getFirestore } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private firestore: Firestore,
    private router: Router,
    private ngzone: NgZone,
    private firebase: Auth

  ) { }
  async registerpatient(e_mail: string, pass_word: string) {
    return signInWithEmailAndPassword(this.firebase, e_mail, pass_word).then((result) => {
      this.setPatient(result.user)
      window.alert(`Account created succesfully!!, your patient ID is ${result.user.uid}`)
    }).catch((error) => {
      console.log(error)
    })
  }

  setPatient(patient: any) {

    const patientRef = doc(this.firestore, `patients/${patient.uid}`);

    const patientData: Patient = {
      uid: patient.id || null,
      email: patient.email,
      display_name: patient.display_name || null,
      Age: patient.Age || null,
      Phone_No: patient.Phone_No || null,
      Ailments: patient.Ailments || null,
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
      console.log('Patient deleted succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

  async get_updated_patient(id: string, name: string, age: number, phoneno: string, ailments: string) {
    const P: any = {
      display_name: name || null,
      Age: age || null,
      Phone_no: phoneno || null,
      Ailments: ailments || null,
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
    } else {
      console.log('No such documents')
    }
  }

  async GetAllPatients() {
    const colref = collection(this.firestore, 'patients')
    const docsnap = await getDocs(colref)
    docsnap.forEach(doc => {
      console.log(doc.data())
    })
  }

  async get_number_of_patients(){
    const db = getFirestore()
    const group = collectionGroup(db,'patients')
    const snapshot = await getCountFromServer(group)
    const c = snapshot.data().count
    print(c)
  }
    
}
