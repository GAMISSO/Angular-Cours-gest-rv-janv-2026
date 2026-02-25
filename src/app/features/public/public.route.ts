import { Routes } from "@angular/router";
import { Public } from "./public";
import { Login } from "./login/login";
import { Patient } from "./patient/patient";

export const PUBLIC_ROUTE: Routes = [
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
];