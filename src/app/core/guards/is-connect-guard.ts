import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ISecurityService, SECURITY_SERVICE_TOKEN } from '../services/interfaces/security.interface.service';

export const isConnectGuard: CanActivateFn = (route, state) => {
  let securityService: ISecurityService = inject(SECURITY_SERVICE_TOKEN);
  let router = inject(Router);
  if (!securityService.isAuthenticated()) {
    router.navigate(['/public/login']);
    return false;
  }
  return true;
};

