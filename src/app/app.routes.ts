import { Routes } from '@angular/router';
import { ListDemande } from './features/private/demande-rv/list-demande/list-demande';
import { Dashboard } from './features/private/dashboard/dashboard';
import { FormDemande } from './features/private/demande-rv/form-demande/form-demande';
import { Login } from './features/public/login/login';
import { Patient } from './features/public/patient/patient';
import { Public } from './features/public/public';
import { Private } from './features/private/private';


export const routes: Routes = [
    {
        path: 'private',
        component: Private,
        children: [
            {
                path: '',
                redirectTo: 'dash',
                pathMatch: 'full'
            },
            {
                path: 'dash',
                component: Dashboard
            },
            // {
            //     path: 'form-demande-rv',
            //     component: FormDemande
            // },
            {
                path: 'list-demande',
                component: ListDemande
            },
            {
                path: 'create-demande',
                component: FormDemande
            },
        ]
    },
    
    {
        path:'public',
        component:Public,
        children: [
            {
                path:'',
                redirectTo:'login',
                pathMatch:'full'
            },
            {
                path:'login',
                component:Login
            },
            {
                path:'create-patient',
                component:Patient
            },
        ]
    },
        {path: '', redirectTo: '/public', pathMatch: 'full' },
        {path:'**', redirectTo: '/public/login' }
];
