export interface PatientModel {
    id: number;
    numero: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse: string;
    antecedents: string;
}

export type PatientRequest = Omit<PatientModel, 'id'>;

//Omit Creer un type qui contient toutes les propriétés de PatientModel sauf 'id' pour les requetes de creation de patient
//Pick Creer un type qui contient seulement les propriétés 'id', 'numero', 'nom' et 'prenom' de PatientModel pour les requetes de mise à jour de patient
//Required Creer un type qui rend toutes les propriétés de PatientModel obligatoires pour les requetes de mise à jour de patient
//Partial Creer un type qui rend toutes les propriétés de PatientModel optionnelles pour les requetes de mise à jour partielle de patient