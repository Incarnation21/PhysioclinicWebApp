// This file defines and exports TypeScript interfaces used throughout the application.

export interface Patient {
    id: number;
    name: string;
    age: number;
    medicalHistory: string[];
}

export interface Appointment {
    id: number;
    patientId: number;
    date: string;
    time: string;
    notes?: string;
}

export interface User {
    id: number;
    username: string;
    password: string;
    role: 'admin' | 'physiotherapist' | 'receptionist';
}