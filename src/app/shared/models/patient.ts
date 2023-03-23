export interface Patient {
    uid: string;
    display_name: string;
    image_fieldurl: string;
    Age: number;
    Phone_No: number;
    Ailments: string;
    Notes: string[];
    Medication_name: string;
    Medication_Dose: number;
    email: string;
    email_verified: boolean;

}