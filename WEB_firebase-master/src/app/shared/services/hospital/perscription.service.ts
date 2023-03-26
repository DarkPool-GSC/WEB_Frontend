import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { Firestore } from '@angular/fire/firestore';
import { Medicines } from '../../models/perscription';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { setDoc, getDoc, updateDoc, deleteDoc, doc, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class PerscriptionService {

  constructor(
    private firestore: Firestore,
    private router: Router,
    private ngzone: NgZone,
  ) { }

  set_up_perscription(id: string, medicine_name: string, dos: string, frequency: string, remaining: number, required_Duration: number) {
    const docref = doc(this.firestore, `perscription/${id}`);
    const perscription_data: Medicines = {
      medicineName: medicine_name,
      dosage: dos,
      frequency: frequency,
      remaining: remaining,
      requiredDuration: required_Duration,
    }
    return setDoc(docref, perscription_data, {
      merge: true
    })
  }

  async update_perscription(id: string, medicine_name?: string, dos?: string, frequency?: string, remaining?: number, required_Duration?: number) {
    const docref = doc(this.firestore, 'perscription', id)
    const M: any = {
      medicineName: medicine_name,
      dosage: dos,
      frequency: frequency,
      remaining: remaining,
      requiredDuration: required_Duration,
    }
    await updateDoc(docref, M).then(() => {
      console.log("Perscription updated succesfully")
    }).catch(error => {
      console.log(error)
    })
  }

  async get_medicine(id: string) {
    const docref = doc(this.firestore, 'perscription', id)
    const docsnap = await getDoc(docref)
    if (docsnap.exists()) {
      console.log("Data fetched succesfully!", docsnap.data())
    } else {
      console.log("No such document")
    }
  }

  async delete_medicine(id: string) {
    const docref = doc(this.firestore, 'perscription', id)
    await deleteDoc(docref).then(() => {
      console.log("Medicine deleted succesfully")
    }).catch(error => {
      console.log(error)
    })
  }
}
