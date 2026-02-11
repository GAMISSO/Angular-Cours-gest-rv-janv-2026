import { Component, OnInit } from '@angular/core';
import { FormDemande } from '../form-demande/form-demande';
import { RouterLink } from '@angular/router';
import { DemandeListeReponse, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.model';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule],
  templateUrl: './list-demande.html',
  styleUrl: './list-demande.css',
})
export class ListDemande implements OnInit {
  title: string = 'Mes Demandes de RV';
  demandes?: DemandeListeReponse;
  filter: DemandeRVFilterModel = {
    statut: 'En Attente',
    specialite: ''

  };
  constructor(private demandeService: DemandeService) {

  }//Injections de dépendance

  ngOnInit(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    this.demandes = this.demandeService.getDemandes(this.filter);
  }

  onFilterStatusChange(): void {
    this.loadDemandes();

  }
  onFilterSpecialiteChange(): void {
    this.loadDemandes();
  }
}
