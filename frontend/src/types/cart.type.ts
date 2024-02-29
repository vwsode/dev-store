import { Size } from './product.type';

type Product = {
    id: number;
    name: string;
    category: string;
};

type ProductItem = {
    id: number;
    product: Product;
    mainImage: string;
};

export type CartItem = {
    quantity: number;
    totalPrice: number;
    size: Size;
    productItem: ProductItem;
};

export type Cart = {
    items: CartItem[];
    totalPrice: number;
};
