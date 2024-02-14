import {configureStore} from '@reduxjs/toolkit'

import cartSlice from "./slices/cartSlice.ts";
import favoriteSlice from "./slices/favoriteSlice.ts";
import userSlice from "./slices/userSlice.ts";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        favorites: favoriteSlice,
        user: userSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch