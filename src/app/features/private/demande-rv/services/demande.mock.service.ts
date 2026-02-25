import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListeReponse, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.model';
import { environment } from '../../../../../environments/environment';
import { DemandeServiceInterface } from './interface/demande.service.interface';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemandeMockService implements DemandeServiceInterface {
  constructor() { }

  public getDemandes(filteDemander: DemandeRVFilterModel): Observable<DemandeListeReponse> {
    let demandes = [...MOCK_DEMANDES];
    if (filteDemander.statut) {
      demandes = demandes.filter(demande => demande.statut === filteDemander.statut);
    }
    if (filteDemander.specialite) {
      demandes = demandes.filter(demande => demande.specialite === filteDemander.specialite);
    }
    const page = filteDemander.page || 1;
    const size = filteDemander.size || environment.limite || 5;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
    
    const pages: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);
    const paginatedDemandes = demandes.slice(startIndex, endIndex);
    return of( { 
        data: paginatedDemandes, 
        totalPage: totalPages, 
        currentPage: page, 
        totalItems: demandes.length, 
        pages: pages, 
        size: size
    } ).pipe(
        delay(5000) // Simulate async operation with a delay
    );
    //logique pour récupérer les demandes depuis une API ou une base de données
  }
}
