import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Dashboard } from './features/private/dashboard';
import { Header } from './layouts/private/header/header';
import { HeaderPublic } from './layouts/public/header-public/header-public';
import { Observable, Subscriber } from 'rxjs';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('ges-rv');
  

 
  
  
}