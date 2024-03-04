import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { CartItem } from '../../types/types';
import {
    addToCart as addToCartApi,
    getCartItems,
    removeFromCart as removeFromCartApi,
} from '../../api/productApi.ts';
import { RootState } from '../store.ts';
import { Cart, CartItem } from '@/types/cart.type.ts';

export const fetchCartItems = createAsyncThunk(
    'cart/fetchCart',
    async (_, { getState }) => {
        const { user } = getState() as RootState;

        if (user.user?.authToken) {
            const data = await getCartItems(user.user?.authToken);
            return {
                items: data.items.map(
                    (item: {
                        total_item_price: number;
                        qty: number;
                        size: {
                            id: number;
                            size: number;
                        };
                        product_item: {
                            id: number;
                            main_image: string;
                            product: {
                                category: string;
                                id: number;
                                name: string;
                            };
                        };
                    }) => ({
                        totalPrice: item.total_item_price,
                        quantity: item.qty,
                        size: item.size,
                        productItem: {
                            id: item.product_item.id,
                            mainImage: item.product_item.main_image,
                            product: item.product_item.product,
                        },
                    }),
                ),
                totalPrice: data.total_price,
            };
        }

        return [];
    },
);

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (
        data: {
            productId: number;
            quantity: number;
            sizeId: number;
        },
        { dispatch, getState },
    ) => {
        const { user } = getState() as RootState;

        if (user.user?.authToken) {
            await addToCartApi(
                data.productId,
                data.quantity,
                user.user.authToken,
                data.sizeId,
            );
            dispatch(fetchCartItems());
        }
    },
);

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (
        data: {
            productId: number;
            sizeId: number;
        },
        { dispatch, getState },
    ) => {
        const { user } = getState() as RootState;

        if (user.user?.authToken) {
            await removeFromCartApi(
                data.productId,
                data.sizeId,
                user.user.authToken,
            );
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
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                const { totalPrice, items } = action.payload as Cart;

                state.loading = false;
                state.totalPrice = totalPrice;
                state.totalCount = items.length;
                state.cart = items;
            })
            .addCase(fetchCartItems.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default cartSlice.reducer;
// export const {removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
