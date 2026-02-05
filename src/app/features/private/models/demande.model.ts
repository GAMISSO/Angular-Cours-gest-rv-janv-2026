//model {viewModel ou DTO} sont des classes
//TypeScript qui représentent la structure des données
//utilisées dans un composant
    // Type
   // classe[attributs publics]
//    class Demandes{
//     constructor(
//         public id: number,
//         public dateDemande: Date,
//         public statut: string,
//         public heure: string
//     ){}
//    }
   // Enumeration
   export enum SpecialiteModel{
    CARDIOLOGIE = 'Cardiologie',
    DERMATOLOGIE = 'Dermatologie',
    GYNECOLOGIE = 'Gynécologie',
    PEDIATRIE = 'Pédiatrie',
    ORTHOPEDIE = 'Orthopédie'
   }
   export enum StatutDemandeModel{
    EN_ATTENTE = 'En Attente',
    ACCEPTER = 'Acceptée',
    REJETER = 'Refusée'
   }
   //Interface{defaut}
   export interface DemandeListRVModel{
    id: number;
    dateDemande: String;
    statut: StatutDemandeModel;
    heure: string;
    specialite: SpecialiteModel;
   }
