import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProductById, getProducts} from "../../api/productApi.ts";
import type {Product} from "../../types/types";


export const fetchProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async () => {
        return await getProducts();
    }
)

export const fetchProduct = createAsyncThunk(
    "products/fetchProduct",
    async (id: number) => {
        return await getProductById(id);
    }
)

interface ProductsState {
    products: Product[];
    loading: boolean;
    product: Product;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    product: {
        id: 0,
        images: [],
        title: '',
        description: '',
        price: 0,
        category: {
            name: '',
            id: 0,
            image: ''
        }
    },
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
        })

        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchProduct.rejected, (state) => {
            state.loading = false;
        })

    }
});

export default productsSlice.reducer;
