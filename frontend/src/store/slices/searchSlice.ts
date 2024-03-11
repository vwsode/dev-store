// searchSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductCard } from '@/types/product.type';
import { getProducts } from '@/api/productApi';

interface SearchState {
    searchTerm: string;
    searchResults: ProductCard[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    searchTerm: '',
    searchResults: [],
    loading: false,
    error: null,
};

export const searchCatalog = createAsyncThunk(
    'search/searchCatalog',
    async (searchTerm: string) => {
        const data = await getProducts(searchTerm);
        return data.map((item) => ({
            id: item.id,
            isSale: item.is_sale,
            mainImage: item.main_image,
            newPrice: item.new_price,
            price: item.price,
            product: {
                category: item.product.category,
                name: item.product.name,
            },
        }));
    },
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchCatalog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchCatalog.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload;
            })
            .addCase(searchCatalog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
