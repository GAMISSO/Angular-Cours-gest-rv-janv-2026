import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
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
    
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    const paginatedDemandes = demandes.slice(startIndex, endIndex);
    return {data: paginatedDemandes, totalPage: 1, currentPage: 1, totalItems: demandes.length, pages: [1], size: demandes.length};
    //logique pour récupérer les demandes depuis une API ou une base de données
  }
}
