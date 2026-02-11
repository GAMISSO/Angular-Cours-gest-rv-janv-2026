import { DemandeListRVModel } from "../features/private/models/demande.model";
//base de données factices pour les demandes de rendez-vous
//simulation d'une API
export const MOCK_DEMANDES:DemandeListRVModel[] = [
  { id: 1, dateDemande: '2024-07-01', statut: 'En Attente', heure: '10:00', specialite: 'Cardiologie' },
  { id: 2, dateDemande: '2024-07-05', statut: 'Acceptée', heure: '14:30', specialite: 'Gynécologie' },
  { id: 3, dateDemande: '2024-07-10', statut: 'Refusée', heure: '09:15', specialite: 'Dermatologie' },
  { id: 4, dateDemande: '2024-07-15', statut: 'En Attente', heure: '11:00', specialite: 'Pédiatrie' },
  { id: 5, dateDemande: '2024-07-20', statut: 'Acceptée', heure: '16:00', specialite: 'Orthopédie' },
  { id: 6, dateDemande: '2024-07-25', statut: 'Refusée', heure: '13:30', specialite: 'Cardiologie' },
  { id: 7, dateDemande: '2024-07-30', statut: 'En Attente', heure: '15:00', specialite: 'Orthopédie' },
  { id: 8, dateDemande: '2024-08-05', statut: 'Acceptée', heure: '10:30', specialite: 'Pédiatrie' },
  { id: 9, dateDemande: '2024-08-10', statut: 'Refusée', heure: '12:00', specialite: 'Pédiatrie' },
  {id: 10, dateDemande: '2024-08-15', statut :'En Attente', heure: '09:45', specialite: 'Dermatologie' },
];