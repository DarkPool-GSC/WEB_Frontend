import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc,getDoc, deleteDoc, collection, getDocs } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Patient } from '../../models/patient';
import { Medicines, Report } from '../../models/report';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  report= {};
  constructor(private firestore : Firestore) {
    this.report = {}
   }
  genrateReport(instructions : string, medicines : Medicines[], patient : any){
    const reportCollection = collection(this.firestore, `patient/${patient.id}/report`);
    const report : Report = {
      patientId : patient.id,
      instructions : instructions,
    }
    return addDoc(reportCollection, report);

  }
  async getReportForAPatient(patientID : string){
    const reportCollectionRef = collection(this.firestore, `patient/${patientID}/report`);
    const querySnapshot = await getDocs(reportCollectionRef);
    this.report = querySnapshot;
  }

}
