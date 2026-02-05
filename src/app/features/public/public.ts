import { Component } from '@angular/core';
import { HeaderPublic } from '../../layouts/public/header-public/header-public';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public',
  imports: [HeaderPublic,RouterOutlet],
  templateUrl: './public.html',
  styleUrl: './public.css',
})
export class Public {

}
