// Here we set types for the product

export type Product = {
  id: String;
  name: String;
  slug: String;
  image: String;
  banner: String;
  price: Number;
  brand: String;
  description: String;
  category: String;
  rating: Number;
  numReviews: Number;
  countInStock: Number;
  colors?: [];
  sizes?: [];
};
