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
  imports: [ AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy,OnInit {
  protected readonly title = signal('ges-rv');
  helloObservable$?: Observable<string>;

  constructor() {
    //Observable qui emet une lettre du message "Hello,Angular!" toutes les secondes
    this.helloObservable$ = new Observable<string>((subscriber:Subscriber<string>) => {
      const message = 'Hello, Angular!';
      for (let i = 0; i < message.length; i++) {
        setTimeout(() => {
          subscriber.next(message[i]);
        }, 1000 * (i + 1));
      }
      setInterval(() => {
        subscriber.complete();
      }, 1000 * (message.length + 1)); // pour éviter que l'observable ne se termine
  });

  //Declaration de deux observateur
  
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}