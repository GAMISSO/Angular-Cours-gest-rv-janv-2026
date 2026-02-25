import { Observable } from "rxjs";
import { DemandeListeReponse, DemandeRVFilterModel } from "../../../models/demande.model";

export interface DemandeServiceInterface {
    getDemandes(filteDemander: DemandeRVFilterModel): Observable<DemandeListeReponse>;
    
}