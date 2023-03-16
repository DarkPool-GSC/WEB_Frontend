import { Injectable, NgZone } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import firebase from 'firebase/compat';
import { Patient} from '../models/patient';
import { deleteDoc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { User } from '../models/user';

export class patientservice{
    patientdata:any
    constructor(
        private firestore:Firestore,
        private router:Router,
        private ngzone:NgZone
    ) {}
    
    setPatient(patient:any){
       
        const patientref = doc(this.firestore,`patients/${patient.uid}`);
        const displayname = firebase.auth().currentUser?.displayName
        const id = firebase.auth().currentUser?.uid
        const Image = firebase.auth().currentUser?.photoURL
        const patientData: Patient = {
                   uid:patient.id,
                   display_name:patient.displayname,
                   Age:patient.Age,
                   Weight:patient.Weight,
                   Phone_No:patient.Phone_No,
                   Ailments:patient.Ailments,
                   Last_Visit:patient.Last_Visit,
                   Pulse:patient.Pulse,
                   Blood_Pressure:patient.Blood_Pressure,
                   Notes:patient.Notes,
                   Medication_name:patient.Medication_name,
                   Medication_Dose:patient.Medication_Dose,
                   image_fieldurl:patient.Image
                }
                return setDoc(patientref,patientData,{
                    merge:true,
                });

    }
    
    async deletePatient(){
        const db = getFirestore()
        const ID = firebase.auth().currentUser?.uid
        const docref = doc(db,'patients','ID')
        await deleteDoc(docref).then(() =>{
          console.log('Patient deleted succesfully')
        }).catch(error =>{
         console.log(error)
        })
     }

    async UpdatePatient(patient:Patient){
        const db = getFirestore()
        const ID = firebase.auth().currentUser?.uid
        const docref = doc(db,'patients','ID')
        await updateDoc(docref,{
        patient
        });
    }
}

