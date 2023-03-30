import { Injectable, NgZone } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { setDoc, getDoc, updateDoc, deleteDoc, doc, collection, getDocs } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getCountFromServer } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorcount = 0;
  arr:any[];
  doctorArr : any;
  constructor(
    private firestore: Firestore,
    private router: Router,
    private ngzone: NgZone,
    private firebase: Auth

  ) {
    this.doctorcount = 0;
    this.arr = []
   }
  

  async registerDoctor(doctor : any) {
    return createUserWithEmailAndPassword(this.firebase, doctor.email, doctor.password).then((result) => {
      this.setDoctor(result.user, doctor)
      window.alert(`Account created succesfully!!, your doctor ID is ${result.user.uid}`)
    }).catch((error) => {
      console.log(error)
      window.alert(error.message);
    })
  }

  async setDoctor(user : any, doctor: any) {
    const doctorref = doc(this.firestore, `doctors/${user.uid}`)
    const doctordata: Doctor = {
      uid: user.uid ,
      Doctor_mail:doctor.email ,
      Doctor_name: doctor.name ,
      Doctor_specialization: doctor.specialization,
      Doctor_photourl: doctor.Doctor_photourl || null,
      Doctor_Qualification: doctor.Doctor_Qualification || null, 
      Doctor_Experience: doctor.Doctor_Experience || null,

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
  async get_updated_doctor(id:string,name?:string,spec?:string){
    const D:any = {
      Doctor_name:name,
      Doctor_specialization:spec
    }
    this.UpdateDoctor(id,D)

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
    this.arr =[];
    docsnap.forEach(doc => {
       var dat = doc.data()
       this.arr.push(dat)
    })
    this.doctorArr = this.arr;
    return this.arr
  }
  async get_count(){
    const colref = collection(this.firestore, 'doctors');
    this.doctorcount =  await (await getCountFromServer(colref)).data().count;
    return this.doctorcount;
  }
}

