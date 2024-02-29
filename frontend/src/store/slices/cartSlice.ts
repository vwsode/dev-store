import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { CartItem } from '../../types/types';
import {
    addToCart as addToCartApi,
    removeFromCart as removeFromCartApi,
} from '../../api/productApi.ts';
import { RootState } from '../store.ts';

export const fetchCartItems = createAsyncThunk('cart/fetchCart', async () => {
    return new Promise((r) => setTimeout(r, 2000));
});

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (
        data: {
            id: number;
            quantity: number;
        },
        { dispatch, getState },
    ) => {
        const { user } = getState() as RootState;

        if (user.user?.authToken) {
            await addToCartApi(data.id, data.quantity, user.user.authToken);
            dispatch(fetchCartItems());
        }
    },
);

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (itemId: number, { dispatch, getState }) => {
        const { user } = getState() as RootState;

        if (user.user?.authToken) {
            await removeFromCartApi(itemId, user.user.authToken);
            dispatch(fetchCartItems());
        }
    },
);

interface CartState {
    cart: CartItem[];
    loading: boolean;
    totalCount: number;
    totalPrice: number;
}

const initialState: CartState = {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    loading: false,
};

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCartItems.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(fetchCartItems.rejected, (state) => {
                state.loading = false;
                console.log('update2');
            });
    },
});

export default cartSlice.reducer;
// export const {removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
