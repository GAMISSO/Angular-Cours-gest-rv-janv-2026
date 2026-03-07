import { Observable } from "rxjs";
import { DemandeListeReponse, DemandeRVFilterModel } from "../../../models/demande.model";
import { InjectionToken } from "@angular/core";

export interface DemandeServiceInterface {
    getDemandes(filteDemander: DemandeRVFilterModel): Observable<DemandeListeReponse>;
    
}

export const DEMANDE_SERVICE_TOKEN = new InjectionToken<DemandeServiceInterface>('DEMANDE_SERVICE_TOKEN');