import { Injectable } from '@angular/core';
import { PatientRequest } from '../models/patient.model';
import { MOCK_PATIENTS } from '@mocks';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor() { }
  createPatient(patientData: PatientRequest): void {
    //creation de patien avec generation de ID
    const newPatient = {
      id: Math.floor(Math.random() * 1000), // Génération d'un ID aléatoire
      ...patientData
    };
    MOCK_PATIENTS.push(newPatient);
    console.log('Patient créé :', newPatient);
  }
}
