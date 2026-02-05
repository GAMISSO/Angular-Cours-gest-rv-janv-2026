import { Component } from '@angular/core';
import { Header } from '../../layouts/private/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private',
  imports: [Header,RouterOutlet],
  templateUrl: './private.html',
  styleUrl: './private.css',
})
export class Private {

}
