
export interface Patient{
    uid:string
    display_name: string
    image_fieldurl:string
    Age:number
    Weight:number
    Phone_No:number
    Ailments:string
    Last_Visit:Date
    Pulse:number
    Blood_Pressure:number
    Notes:string[]
    Medication_name:string
    Medication_Dose:number
}

export interface Department{
    Department_name:string,
    Department_specializations:string[]
    Doctors:string[]
}

export interface Doctor{
    uid:string
    Doctor_name:string
    Doctor_photourl:string
    Doctor_Qualification:string
    Doctor_Experience:number
    Doctor_specialization:number
}