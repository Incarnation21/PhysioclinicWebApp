// This file defines the Patient model, which represents the structure of patient data in the database.

export interface Patient {
    id: number;
    name: string;
    age: number;
    medicalHistory: string[];
}

export class PatientModel {
    constructor(public patient: Patient) {}

    // Method to get patient details
    getDetails(): string {
        return `Patient ID: ${this.patient.id}, Name: ${this.patient.name}, Age: ${this.patient.age}, Medical History: ${this.patient.medicalHistory.join(', ')}`;
    }

    // Method to update patient information
    updateInfo(updatedPatient: Partial<Patient>): void {
        this.patient = { ...this.patient, ...updatedPatient };
    }
}