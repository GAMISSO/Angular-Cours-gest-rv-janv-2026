import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginRequest } from 'src/app/core/models/user.model';
import { ISecurityService, SECURITY_SERVICE_TOKEN } from 'src/app/core/services/interfaces/security.interface.service';
import { Security } from 'src/app/core/services/security';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userLogin:UserLoginRequest = {
    email: 'email@gmail.com',
    password: ''
  };

  errorMessage: string = '';
  nom: string = 'John DOE';
  constructor(@Inject(SECURITY_SERVICE_TOKEN) private securityService: ISecurityService,private router: Router) {}

  onLogin(loginForm: NgForm): void {
    if (loginForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs requis.';
      return;
    }
    // Logique de connexion ici
    const loginResult = this.securityService.login(this.userLogin);
    if (loginResult != null) {
      // Connexion réussie
      this.router.navigate(['/private/dash']);
    } 
  }

  isFieldInvalid(fieldName: string, loginForm: NgForm): boolean {
    loginForm.controls[fieldName]
    return !!(loginForm.controls[fieldName] && loginForm.controls[fieldName].invalid && (loginForm.controls[fieldName].dirty || loginForm.controls[fieldName].touched));
  }

}
