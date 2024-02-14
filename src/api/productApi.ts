import axios from "axios";

const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const getProducts = async () => {
    const {data} = await axios.get(`${BASE_URL}/products`);

    return data;
}
export const getProductById = async (id: number) => {
    const {data} = await axios.get(`${BASE_URL}/products/${id}`);

    return data;
}