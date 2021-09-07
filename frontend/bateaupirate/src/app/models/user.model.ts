export interface UserModelServer {
  idClient: number;
  idParrain: number;
  nom: string;
  prenom: string;
  pseudo: string;
  mdp: string;
  role: number;
  adresse: string;
  code_postal: number;
  ville: string;
  email: string;
  tel: number;
  date_inscription: Date;
  photoUrl: string;
  type: string;
}
export interface SingleUserModel {
  idClient: number;
  idParrain: number;
  nom: string;
  prenom: string;
  pseudo: string;
  mdp: string;
  role: number;
  adresse: string;
  code_postal: number;
  ville: string;
  email: string;
  tel: number;
  date_inscription: Date;
  photoUrl: string;
  type: string;
}
