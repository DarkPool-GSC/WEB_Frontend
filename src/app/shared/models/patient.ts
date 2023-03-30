export interface Patient {
    uid: string;
    display_name: string;
    image_fieldurl: string;
    age: number;
    phone_No: number;
    ailments: string;
    Notes: string[];
    Medication_name: string;
    Medication_Dose: number;
    email: string;
    email_verified: boolean;

}