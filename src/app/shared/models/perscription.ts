export interface Medicines {
    medicineName: string,
    dosage: string,
    frequency: string,
    remaining: number,
    requiredDuration: number
}
export interface Pricription {
    patient: string,
    doctor : string,
    prescription : string
}