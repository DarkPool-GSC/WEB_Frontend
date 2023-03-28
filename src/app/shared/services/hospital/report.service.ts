import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, getDoc, deleteDoc, collection, getDocs } from '@angular/fire/firestore';
import { addDoc, updateDoc } from 'firebase/firestore';
import { Patient } from '../../models/patient';
import { Report } from '../../models/report';
@Injectable({
  providedIn: 'root'
})

export class ReportService {
  report:any
  constructor(private firestore: Firestore) {
    this.report = null
  }

  setUpreport(id: string, instructions: string) {
    const docref = doc(this.firestore, `reports/${id}}`)
    const reportdata: Report = {
      patientId: id,
      instructions: instructions || "",
    }
    return setDoc(docref,reportdata,{
      merge:true
    })
  }

  async getReport(id: string) {
    const docref = doc(this.firestore, 'reports', id)
    const docsnap = await getDoc(docref)
    if (docsnap.exists()) {
      console.log('Patient data succesfully fetched', docsnap.data())
      this.report = docsnap.data()
      return this.report
    } else {
      window.alert('No such data found')
    }
  }

  async fetch_updated_report(id: string, instructions: string) {
    const r: any = {
      patientID: id,
      instructions: instructions || "",
    }
    this.updatereport(id, r)
  }
  async updatereport(id: string, report: any) {
    const docref = doc(this.firestore, 'reports', id)
    await updateDoc(docref, report).then(() => {
      window.alert('Report updated succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

  async deletereport(id: string) {
    const docref = doc(this.firestore, 'reports', id)
    await deleteDoc(docref).then(() => {
      window.alert('Patient deleted succesfully')
    }).catch(error => {
      console.log(error)
    })
  }

}
