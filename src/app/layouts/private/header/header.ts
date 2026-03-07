import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { UserLoginResponse } from 'src/app/core/models/user.model';
import { ISecurityService, SECURITY_SERVICE_TOKEN } from 'src/app/core/services/interfaces/security.interface.service';
import { Security } from 'src/app/core/services/security';

@Component({
  selector: 'app-header-private',
  imports: [RouterLink,RouterLinkActive,],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  public currentUser!:UserLoginResponse
  constructor(
    @Inject(SECURITY_SERVICE_TOKEN) private securityService: ISecurityService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentUser = this.securityService.getCurrentUser()!;
  }

  logout(): void {
    this.securityService.logout();
    this.router.navigate(['/public/login']);
  }

}
