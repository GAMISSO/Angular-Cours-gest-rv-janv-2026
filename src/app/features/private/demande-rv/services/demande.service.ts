import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListeReponse, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  constructor() { }

  public getDemandes(filteDemander: DemandeRVFilterModel): DemandeListeReponse {
    setTimeout(() => {
      console.log('Simulating async operation')
    }, 1000);
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
    return {data: paginatedDemandes, totalPage: totalPages, currentPage: page, totalItems: demandes.length, pages: pages, size: size};
    //logique pour récupérer les demandes depuis une API ou une base de données
  }
}
