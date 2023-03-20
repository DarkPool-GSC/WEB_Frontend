import { Injectable, NgZone } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, updateDoc,getDoc,getDocs } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Patient } from '../../models/patient';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private firestore:Firestore,
    private router:Router,
    private ngzone:NgZone,
    private firebase : Auth

  ) { }
  setPatient(patient:any){
       
    const patientRef = doc(this.firestore,`patients/${patient.uid}`);

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
            return setDoc(patientRef,patientData,{
                merge:true,
            });

}

async deletePatient(id:string){
    const docref = doc(this.firestore,'patients',id)
    await deleteDoc(docref).then(() =>{
      console.log('Patient deleted succesfully')
    }).catch(error =>{
     console.log(error)
    })
 }

async UpdatePatient(id:string,patient:any){
    const docref = doc(this.firestore,'patients',id)
    await updateDoc(docref,patient).then(()=>{
      console.log('Patient updated succesfully')
    }).catch(error => {
      console.log(error)
    })
}

async GetPatient(i_d:string){
  const docref = doc(this.firestore,'patients',i_d)
  const docsnap = await getDoc(docref)
  if(docsnap.exists()){
      console.log('Patient Data:',docsnap.data())
  }else{
      console.log('No such documents')
  }
}

async GetAllPatients(){
  const colref = collection(this.firestore,'patients')
  const docsnap = await getDocs(colref)
  docsnap.forEach(doc =>{
      console.log(doc.data())
  })
}

}
