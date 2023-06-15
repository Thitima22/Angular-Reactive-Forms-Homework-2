/* Defines the product entity */
export interface Product {
  id: number | null;
  productName: string;
  productCode: string;
  productLocation: string;
  tags?: string[];
  times?: string[];
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
