import {createSlice} from "@reduxjs/toolkit";

interface CartState {
    cart: []
}

const initialState: CartState = {
    cart: []
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
            state.cart = state.cart.filter(item => item !== action.payload);
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
    }
});

export default cartSlice.reducer;
export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

