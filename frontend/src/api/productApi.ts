import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const getProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/products/?format=json`);

    return data;
};
export const getProductById = async (id: number) => {
    const { data } = await axios.get(`${BASE_URL}/products/${id}/?format=json`);

    return data;
};

export const getFavorites = async () => {
    const { data } = await axios.get(`${BASE_URL}/product&limit=3`);

    return data;
};

export const makeReview = async (review: {
    star: number;
    title: string;
    text: string;
}) => {
    const { data } = await axios.post(`${BASE_URL}/product`, review);
    return data;
};

export const getCartItems = async (token: string) => {
    const { data } = await axios.get(`${BASE_URL}/cart/`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return data;
};

export const addToCart = async (
    productId: number,
    quantity: number,
    token: string,
    sizeId: number,
) => {
    const { data } = await axios.post(
        `${BASE_URL}/cart/`,
        {
            product_id: productId,
            qty: quantity,
            size_id: sizeId,
        },
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        },
    );

    return data;
};

export const removeFromCart = async (
    id: number,
    sizeId: number,
    token: string,
) => {
    const { data } = await axios.delete(`${BASE_URL}/cart/`, {
        data: {
            product_id: id,
            size_id: sizeId,
        },
        headers: {
            Authorization: `Token ${token}`,
        },
    });

    return data;
};

export const addToFavorite = async (id: number) => {
    const { data } = await axios.post(`${BASE_URL}`, {
        id,
        method: 'add',
    });

    return data;
};

export const removeFromFavorite = async (id: number) => {
    const { data } = await axios.post(`${BASE_URL}`, {
        id,
        method: 'remove',
    });

    return data;
};
