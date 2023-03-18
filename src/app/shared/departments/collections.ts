import { collection, CollectionReference } from "firebase/firestore";
import { getFirestore,DocumentData } from "firebase/firestore";
import { Patient,Doctor,Department } from "./models";

export const db = getFirestore()
const createCollection = <T = DocumentData>
(collectionName:string) =>{
    return collection(db,collectionName) as CollectionReference<T>
}

export const patientCol = createCollection<Patient>('patients')
export const DoctorCol = createCollection<Doctor>('doctors')
export const DepartmentCol = createCollection<Department>('department/${}')