export interface Report {
    patientId : string,
    instructions : string,
}

export interface Medicines {
    medicineName : string,
    dosage : string,
    frequency : string,
    remaining : number,
    requiredDuration : number
}