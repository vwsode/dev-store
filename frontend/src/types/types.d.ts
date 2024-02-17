export type Product = {
  id: number;
  category: string;
  color: string[];
  size: number[];
  reviews: Review[];
  images: Image[];
  name: string;
  price: number;
  sale_price: number;
  description: string;
  main_image: string;
  slug: string;
};

export interface Review {
  username: string;
  star: number;
  title: string;
  text: string;
  time_created: string;
}

export interface Image {
  alt: string;
  image: string;
}

export type CartItem = Product & {
  quantity: number;
};

type Category = {
  id: number;
  name: string;
  image: string;
  creationAt?: string;
  updatedAt?: string;
};

interface User {
  username: string;
  email: string;
  password: string;
}
