import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProductById, getProducts} from "../../api/productApi.ts";


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
    products: [];
    loading: boolean;
    product: object;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    product: {
        images: [],
        title: '',
        price: '',
        category: {
            name: ''
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
