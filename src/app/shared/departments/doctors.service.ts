import firebase from "firebase/compat";
import { Firestore,collectionData,collection,doc,setDoc } from "@angular/fire/firestore";
import { Data, Router } from "@angular/router";
import { async } from "@firebase/util";
import {getDoc,deleteDoc,getFirestore,updateDoc} from 'firebase/firestore'
import { NgZone } from "@angular/core";
import { Doctor } from "./models";

export class DoctorService{
    Doctor_data:any
    constructor(
        private firestore:Firestore,
        private router:Router,
        private ngzone: NgZone )
        {   (doctor:Doctor) => {
            this.Doctor_data = doctor
        }
    }
    setupDoctor(doctor:any){
        const Doctref = doc(this.firestore,`doctors/${doctor.uid}`)
        const displayDoc_name = firebase.auth().currentUser?.displayName
        doctor.Doctor_name = displayDoc_name
        const iD = firebase.auth().currentUser?.uid
        doctor.uid = iD
        const image = firebase.auth().currentUser?.photoURL
        doctor.Doctor_photourl = image
        const Doctor_data:Doctor = {
                uid:doctor.uid,
                Doctor_name:doctor.Doctor_name,
                Doctor_Experience:doctor.Doctor_Experience,
                Doctor_Qualification:doctor.Doctor_Qualification,
                Doctor_specialization:doctor.Doctor_specialization,
                Doctor_photourl:doctor.Doctor_photourl,
           
            }
            return setDoc(Doctref,Doctor_data,{
                merge:true,
            })
        }

}