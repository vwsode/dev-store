import axios from "axios";
import {Product} from "../types/types";

const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const getProducts = async () => {
    const {data} = await axios.get(`${BASE_URL}/products`);

    return data;
}
export const getProductById = async (id: number) => {
    const {data} = await axios.get(`${BASE_URL}/products/${id}`);

    return data;
}

export const getFavorites = async () => {
    const {data} = await axios.get(`${BASE_URL}/product&limit=3`);

    return data;
}

export const addToCart = async (product: Product) => {
    const {data} = await axios.post(`${BASE_URL}/products`, product);

    return data;
}

export const removeFromCart = async (id: number) => {
    const {data} = await axios.delete(`${BASE_URL}`, {
        data: {
            id
        }
    });

    return data;
}

export const addToFavorite = async (id: number) => {
    const {data} = await axios.post(`${BASE_URL}`, {
        id,
        method: "add"
    });

    return data;
}


export const removeFromFavorite = async (id: number) => {
    const {data} = await axios.post(`${BASE_URL}`, {
        id,
        method: "remove"
    });

    return data;
}