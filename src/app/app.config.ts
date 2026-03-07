import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DEMANDE_SERVICE_TOKEN } from './features/private/demande-rv/services/interface/demande.service.interface';
import { DemandeMockService } from './features/private/demande-rv/services/demande.mock.service';
import { SECURITY_SERVICE_TOKEN } from './core/services/interfaces/security.interface.service';
import { SecurityMockService } from './core/services/security.service.mock';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: DEMANDE_SERVICE_TOKEN,
      useClass: DemandeMockService
    },
    {
      provide: SECURITY_SERVICE_TOKEN,
      useClass: SecurityMockService
    }
  ]
};
