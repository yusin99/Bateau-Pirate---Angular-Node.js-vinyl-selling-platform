export interface ProductModel {
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

export interface ServerResponse {
  count: Number;
  products: ProductModel[];
}
