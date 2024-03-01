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


// type CartItem = {
//     items: {
//         totalItemPrice: number;
//         qty: number;
//         size: {
//             id: number;
//             size: number;
//         };
//         productItem: {
//             id: number;
//             mainImage: string;
//             product: {
//                 category: string;
//                 id: string;
//                 name: string;
//             };
//         };
//     }[];
//     totalPrice: number;
// };