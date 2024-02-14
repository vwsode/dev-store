import {createSlice} from "@reduxjs/toolkit";

interface FavoriteState {
    favorites: []
}

const initialState: FavoriteState = {
    favorites: []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const itemInFavorite = state.favorites.find(item => item.id === action.payload.id);

            if (itemInFavorite) {
                state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
            } else {
                state.favorites.push(itemInFavorite);
            }
        }
    }
});

export default favoriteSlice.reducer;
export const {toggleFavorite} = favoriteSlice.actions;