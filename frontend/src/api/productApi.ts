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

export const addToCart = async (
    id: number,
    qunatity: number,
    token: string,
) => {
    const { data } = await axios.post(
        `${BASE_URL}/cart`,
        {
            id,
            qunatity,
        },
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        },
    );

    return data;
};

export const removeFromCart = async (id: number, token: string) => {
    const { data } = await axios.delete(`${BASE_URL}`, {
        data: {
            id,
        },
        headers: {
            Authorization: `Token ${token}`,
            'Access-Control-Allow-Origin': '*',
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
