import { Component } from '@angular/core';
import { FormDemande } from '../form-demande/form-demande';
import { RouterLink } from '@angular/router';
import { SpecialiteModel } from '../../models/demande.model';
import { DemandeListRVModel, StatutDemandeModel } from '../../models/demande.model';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink],
  templateUrl: './list-demande.html',
  styleUrl: './list-demande.css',
})
export class ListDemande {
  title: string = 'Mes Demandes de RV';
  demandes: DemandeListRVModel[] = [
    { id: 1, dateDemande: '2024-07-01', statut: StatutDemandeModel.EN_ATTENTE, heure: '10:00' , specialite: SpecialiteModel.CARDIOLOGIE},
    { id: 2, dateDemande: '2024-07-05', statut: StatutDemandeModel.ACCEPTER, heure: '14:30', specialite: SpecialiteModel.GYNECOLOGIE },
    { id: 3, dateDemande: '2024-07-10', statut: StatutDemandeModel.REJETER, heure: '09:15', specialite: SpecialiteModel.DERMATOLOGIE },
  ]
}
