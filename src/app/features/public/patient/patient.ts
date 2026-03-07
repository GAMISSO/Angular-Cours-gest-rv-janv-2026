import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientRequest } from 'src/app/core/models/patient.model';
import { PatientService } from 'src/app/core/services/patient';

@Component({
  selector: 'app-patient',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  patientForm:FormGroup;
  messageSucess:string ='';
  constructor(private fb:FormBuilder, private patientService:PatientService) {
    this.patientForm = fb.group({
      numero: new FormControl('',[Validators.required,Validators.minLength(5)]),
      nom: ['',[Validators.required]],
      prenom: ['',[Validators.required]],
      adresse: ['',[Validators.required]],
      telephone: ['',[Validators.required,Validators.pattern(/^(77|78|79)[0-9]{7}$/)]],
      antecedents: [''],
    });
  }
  //771001010
  //Modif (77|78|79) [0-9]{7}
  //Modif 7[789] [0-9]{7}

  get f(){
    return this.patientForm.controls;
  }

  onSubmit():void {
    if(this.patientForm.valid) {
      
      const patientData:PatientRequest = this.patientForm.value;
      //service de creation de patient à implementer
      this.patientService.createPatient(patientData);
      this.messageSucess = "Patient créé avec succès !";
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.f[fieldName];
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onReset(): void {
    this.messageSucess = '';
    this.patientForm.reset();
  }
}
