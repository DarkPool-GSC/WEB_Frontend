import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { Firestore } from '@angular/fire/firestore';
import { Medicines, Pricription } from '../../models/perscription';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { setDoc, getDoc, updateDoc, deleteDoc, doc, collection, getDocs, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class PerscriptionService {
  medicine:any
  constructor(
    private firestore: Firestore,
    private router: Router,
    private ngzone: NgZone,
  ) { 
   this.medicine = null
  }
  async addPrescription(prescription : any, medicines : any){
    const collectionRef = collection(this.firestore, 'perscription');
    const presc : Pricription = {
      patient: prescription.patient,
      doctor : prescription.doctor,
      prescription : prescription.prescription
    }
    return addDoc(collectionRef, presc).then((result)=>{
      medicines.map((med : any, index : number)=>{
        console.log(med, result.id)
        this.addMedicine(med, result.id.toString())
      })
    })
  }
  async addMedicine(medicine: any,prec_id : string){
    console.log(medicine,"this is org", `perscription/${prec_id}/medicines`)
    const collectionRef = collection(this.firestore, `perscription/${prec_id}/medicines`);
    const medic = {
      medicine : medicine.medicine,
      dosage : medicine.dosage,
      comment : medicine.comment
    }
    return addDoc(collectionRef, medic);
  }
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
      window.alert("Perscription updated succesfully")
    }).catch(error => {
      console.log(error)
    })
  }

  async get_medicine(id: string) {
    const docref = doc(this.firestore, 'perscription', id)
    const docsnap = await getDoc(docref)
    if (docsnap.exists()) {
      console.log("Data fetched succesfully!",docsnap.data())
      this.medicine = docsnap.data()
      return this.medicine
    } else {
      window.alert("No such document")
    }
  }

  async delete_medicine(id: string) {
    const docref = doc(this.firestore, 'perscription', id)
    await deleteDoc(docref).then(() => {
      window.alert("Medicine deleted succesfully")
    }).catch(error => {
      console.log(error)
    })
  }
}
