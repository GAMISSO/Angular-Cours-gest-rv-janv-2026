import { Routes } from '@angular/router';
import { ListDemande } from './features/private/demande-rv/list-demande/list-demande';
import { Dashboard } from './features/private/dashboard/dashboard';
import { FormDemande } from './features/private/demande-rv/form-demande/form-demande';
import { Login } from './features/public/login/login';
import { Patient } from './features/public/patient/patient';
import { Public } from './features/public/public';
import { Private } from './features/private/private';
import { isConnectGuard } from './core/guards/is-connect-guard';
import { isConnectChildGuard } from './core/guards/is-connect-child-guard';


export const routes: Routes = [
    
    {
        path: 'private',
        canActivate: [isConnectGuard],
        canActivateChild: [isConnectChildGuard],
    },
    {
        path: 'public',
    },

        {path: '', redirectTo: '/public', pathMatch: 'full' },
        {path:'**', redirectTo: '/public/login' }
];
