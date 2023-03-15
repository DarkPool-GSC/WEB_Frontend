
export class Patient{
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

    constructor( 
        uid:string,
        Ailments:string,
        Last_Visit:Date,
        Pulse:number,
        Blood_Pressure:number,
        Notes:string[],
        Medication_name:string,
        Medication_Dose:number,
        display_name: string,
        image_fieldurl:string,
        Age:number,
        Weight:number,
        Phone_No:number,
        ){
            if(Pulse > 100 && Pulse < 60){
                window.alert('Pulse abnormality detected')
                Notes.push('Pulse Abnormality detected')
            }
            if(Blood_Pressure < 100 && Blood_Pressure > 130){
                window.alert('Blood Pressure abnormality detected')
                Notes.push('Blood Pressure abnormality detected')
            }
            this.Ailments = Ailments
            this.Last_Visit = Last_Visit
            this.Pulse = Pulse
            this.Blood_Pressure = Blood_Pressure
            this.Notes = Notes
            this.Medication_name = Medication_name
            this.Medication_Dose = Medication_Dose
            this.Age = Age
            this.display_name = display_name
            this.Weight = Weight
            this.Phone_No = Phone_No
            this.image_fieldurl = image_fieldurl
            this.uid = uid
        }
}