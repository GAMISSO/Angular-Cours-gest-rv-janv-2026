import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginRequest } from 'src/app/core/models/user.model';
import { Security } from 'src/app/core/services/security';

@Component({
  selector: 'app-login',
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userLogin:UserLoginRequest = {
    email: 'email@gmail.com',
    password: ''
  };

  nom: string = 'John DOE';
  constructor(private securityService: Security,private router: Router) {}

  onLogin(): void {
    // Logique de connexion ici
    const loginResult = this.securityService.login(this.userLogin);
    if (loginResult != null) {
      // Connexion réussie
      this.router.navigate(['/private/dash']);
    } else {
      // Échec de la connexion
      console.log('Échec de la connexion');
    }
  }

}
