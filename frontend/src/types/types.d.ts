export type Product = {
    id: number
    category: string
    color: string[]
    size: number[]
    reviews: Review[]
    images: Image[]
    name: string
    price: number
    sale_price: number
    description: string
    main_image: string
    slug: string
}

export interface Review {
    name: string
    text: string
}

export interface Image {
    alt: string
    image: string
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