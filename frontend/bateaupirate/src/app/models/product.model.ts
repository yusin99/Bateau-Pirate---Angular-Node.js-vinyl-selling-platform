export interface ProductModelServer {
  anne_sortie: number;
  disponible: boolean;
  idCategorie: number;
  idGroupe: number;
  idVinyl: number;
  nom: string;
  photo: string;
  prix: number;
  quantite_dispo: number;
}
export interface SingleProductModelServer {
  idPiste: number;
  idVinyl: number;
  nom: string;
  duree: string;
  idGroupe: number;
  idCategorie: number;
  quantite_dispo: number;
  nomVinyl: string;
  annee_sorti: number;
  prixHT: number;
  photo: string;
  disponible: boolean;
}

export interface ServerResponse {
  count: number;
  products: ProductModelServer[];
}
