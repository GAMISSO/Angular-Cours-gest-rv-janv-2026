import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormDemande } from '../form-demande/form-demande';
import { RouterLink } from '@angular/router';
import { DemandeListeReponse, DemandeListRVModel, DemandeRVFilterModel } from '../../models/demande.model';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemandeMockService } from '../services/demande.mock.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-demande',
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './list-demande.html',
  styleUrl: './list-demande.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemande implements OnInit {
  title: string = 'Mes Demandes de RV';
  demandes?: DemandeListeReponse;
  private subscription: Subscription = new Subscription();
  filter: DemandeRVFilterModel = {
    statut: 'En Attente',
    specialite: ''
  };
  constructor(private demandeService: DemandeMockService,private cdr:ChangeDetectorRef) {

  }//Injections de dépendance

  ngOnInit(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    let demandes$:Observable<DemandeListeReponse> = this.demandeService.getDemandes(this.filter);
    //souscription à l'observable pour récupérer les données
    demandes$.subscribe({
      next: (data:DemandeListeReponse) => {
        this.demandes = data;
        this.cdr.markForCheck(); // Manually trigger change detection
      },
      error: (err) => console.error('Error fetching demandes:', err),
      complete: () => {
        console.log('Finished fetching demandes');
      }
    });
  }

  onFilterStatusAndSpecialiteChange(): void {
    this.loadDemandes();

  }

  onPaginate(page: number): void {
    this.filter.page = page;
    this.loadDemandes();
  }

   get desactivePrecedent(): boolean {
    return !(this.demandes && this.demandes.currentPage > 1) ? true : false;
  }

  get desactiveSuivant(): boolean {
    return !(this.demandes && this.demandes.currentPage < this.demandes.totalPage) ? true : false;
  }
}
