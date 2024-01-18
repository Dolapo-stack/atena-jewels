// Here we set types for the product

export type Product = {
  id: string;
  name: string;
  slug: string;
  image: string;
  banner: string;
  price: number;
  brand: string;
  description: string;
  category: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  colors?: [];
  sizes?: [];
};
