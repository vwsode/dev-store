import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        return new Promise((r) => setTimeout(r, 2000));
    }
)

interface CartState {
    cart: [];
    loading: boolean;
}

const initialState: CartState = {
    cart: [],
    loading: false,
};

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);

            if (itemInCart) {
                // ...
            } else {
                state.cart.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id != action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id = action.payload);
            item.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id = action.payload);

            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCart.fulfilled, (state) => {
                state.loading = false;
                console.log('hello')
            })
            .addCase(fetchCart.rejected, (state) => {
                state.loading = false;
            })
    }
});

export default cartSlice.reducer;
export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

