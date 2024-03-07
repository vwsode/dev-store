type User = {
    firstName: string;
    lastName: string;
};

export type Review = {
    id: number;
    user: User;
    title: string;
    text: string;
    star: number;
    timeCreated: string;
};

type Image = {
    alt?: string;
    image: string;
};

type Product = {
    category: string;
    reviews: Review[];
    style: string;
    avgRating: number;
    name: string;
    description: string;
    productSlug: string;
};

type AdditionalProductItem = {
    id: number;
    mainImage: string;
};

export type ProductCard = {
    id: number;
    product: Omit<Product, 'reviews' | 'description' | 'productSlug'>;
    price: number;
    newPrice: number;
    isSale: boolean;
    mainImage: string;
    itemSlug: string;
};

export type ProductDetails = {
    id: number;
    product: Product;
    color: string[];
    size: number[];
    images: Image[];
    additionalProductItems: AdditionalProductItem[];
    price: number;
    newPrice: number;
    isSale: boolean;
    itemSlug: string;
    mainImage: string;
};

export type Size = {
    id: number;
    size: number;
};

// export type ProductDetails = {
//     id: number;
//     product: ProductItem;
// };
