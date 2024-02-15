import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {removeFromFavorite, addToFavorite, getFavorites} from "../../api/productApi.ts";
import type {Product} from "../../types/types";
import {RootState} from "../store.ts";

export const fetchFavoriteItems = createAsyncThunk(
    "favorite/fetchFav",
    async () => {
        return await getFavorites();
    }
)

export const toggleFavorite = createAsyncThunk(
    "favorite/toggleFav",
    async (itemId: number, {dispatch, getState}) => {
        const state = getState() as RootState;
        const isItemInFavorites = state.favorites.favorites.some(item => item.id === itemId);

        if (isItemInFavorites) {
            await removeFromFavorite(itemId);
        } else {
            await addToFavorite(itemId);
        }

        dispatch(fetchFavoriteItems);
    }
)


interface FavoriteState {
    favorites: Product[],
    loading: boolean,
}

const initialState: FavoriteState = {
    favorites: [],
    loading: false,
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoriteItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFavoriteItems.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(fetchFavoriteItems.rejected, (state) => {
                state.loading = false;
            })
    }
});

export default favoriteSlice.reducer;
