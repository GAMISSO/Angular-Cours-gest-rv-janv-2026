import { Routes } from "@angular/router";
import { Public } from "./public";
import { Login } from "./login/login";
import { Patient } from "./patient/patient";

export const PUBLIC_ROUTE: Routes = [
{
    path:'',
        component:Public,
        children: [
            {
                path:'',
                redirectTo:'login',
                pathMatch:'full'
            },
            {
                path:'login',
                loadComponent:()=> import('./login/login').then(m=>m.Login)
            },
            {
                path:'create-patient',
                loadComponent:()=> import('./patient/patient').then(m=>m.Patient)
            },
        ]
    },
];