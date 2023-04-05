export interface IProduct {
  id: number;
  name: string;
  price: number;
  original_price: number;
  description: string;
  images: { base_url: string }[];
  brand: { id: number; name: string; slug: string };
  specifications: ISpecifications[];
}

export interface ISpecifications {
  name: string;
  attributes: { code: string; name: string; value: string }[];
}
