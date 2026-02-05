import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Dashboard } from './features/private/dashboard';
import { Header } from './layouts/private/header/header';
import { HeaderPublic } from './layouts/public/header-public/header-public';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,HeaderPublic],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('ges-rv');
}
