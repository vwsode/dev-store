import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {CartItem, Product} from "../../types/types";
import {addToCart as addToCartApi, removeFromCart as removeFromCartApi} from "../../api/productApi.ts";


export const fetchCartItems = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        return new Promise((r) => setTimeout(r, 2000));
    }
)

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (product: Product, {dispatch}) => {
        await addToCartApi(product);
        dispatch(fetchCartItems());
    }
)

export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async (itemId: number, {dispatch}) => {
        await removeFromCartApi(itemId);
        dispatch(fetchCartItems());
    }
)

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
    name: "cart",
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.loading = true;
                console.log('update')
            })
            .addCase(fetchCartItems.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(fetchCartItems.rejected, (state) => {
                state.loading = false;
                console.log('update2')
            })
    }
});

export default cartSlice.reducer;
// export const {removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

