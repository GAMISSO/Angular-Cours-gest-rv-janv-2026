import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { DemandeRv } from './features/demande-rv/demande-rv';
import  { FormDemande } from './features/demande-rv/form-demande/form-demande';


export const routes: Routes = [
    {
        path: 'dash',
        component: Dashboard
    },
    {
        path: 'form-demande-rv',
        component: FormDemande
    },
    // {
    //     path: '',
    //     redirectTo: '/dash',
    // }
];
