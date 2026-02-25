import { Routes } from "@angular/router";
import { Private } from "./private";
import { isConnectGuard } from "src/app/core/guards/is-connect-guard";
import { isConnectChildGuard } from "src/app/core/guards/is-connect-child-guard";
import { Dashboard } from "./dashboard/dashboard";
import { ListDemande } from "./demande-rv/list-demande/list-demande";
import { FormDemande } from "./demande-rv/form-demande/form-demande";

export const PRIVATE_ROUTE: Routes = [
    {
        path: '',
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
]