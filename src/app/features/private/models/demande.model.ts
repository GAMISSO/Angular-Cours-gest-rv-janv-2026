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
// export enum SpecialiteModel{
//  CARDIOLOGIE = 'Cardiologie',
//  DERMATOLOGIE = 'Dermatologie',
//  GYNECOLOGIE = 'Gynécologie',
//  PEDIATRIE = 'Pédiatrie',
//  ORTHOPEDIE = 'Orthopédie'
// }

type SpecialiteModel =
   | 'Cardiologie'
   | 'Dermatologie'
   | 'Gynécologie'
   | 'Pédiatrie'
   | 'Orthopédie';
// export enum StatutDemandeModel{
//  EN_ATTENTE = 'En Attente',
//  ACCEPTER = 'Acceptée',
//  REJETER = 'Refusée'
// }
type StatutDemandeModel =
   | 'En Attente'
   | 'Acceptée'
   | 'Refusée';
//Interface{defaut}
export interface DemandeListRVModel {
   id: number;
   dateDemande: String;
   statut: StatutDemandeModel;
   heure: string;
   specialite: SpecialiteModel;
}

class PatientModel {
   constructor(
      public id: number,
      public nom: string,
      public prenom: string,
      public dateNaissance: Date,
      public email: string,
      public telephone: string
   ) { }
}

export interface DemandeRVFilterModel {
   // dateDebut?: Date;
   // dateFin?: Date;
   statut?: StatutDemandeModel | '';
   specialite?: SpecialiteModel | '';
   page?: number;
   size?: number;
}

export interface DemandeListeReponse{
   data: DemandeListRVModel[];
   totalPage: number;
   currentPage: number;
   totalItems: number;
   pages: number[];
   size: number;
}
