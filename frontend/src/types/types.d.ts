export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export type CartItem = Product & {
    quantity: number;
}

type Category = {
    id: number;
    name: string;
    image: string;
    creationAt?: string,
    updatedAt?: string
}

type UserRole = "customer" | "manager";

export type User = {
    id: number,
    email: string,
    password: string,
    name: string,
    role: UserRole,
    avatar: string,
}