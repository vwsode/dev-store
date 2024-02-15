import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {
    fetchCartItems,
    removeFromCart,
    addToCart
} from "../store/slices/cartSlice.ts";

import type {Product} from "../types/types";

const useCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        cart,
        loading,
        totalCount,
        totalPrice
    } = useSelector((state: RootState) => state.cart);

    const loadCart = () => {
        dispatch(fetchCartItems());
    }

    const removeItemFormCart = (id: number) => {
        dispatch(removeFromCart(id));
    }

    const addItemToCart = (product: Product) => {
        dispatch(addToCart(product));
    }

    return {
        cart,
        loading,
        totalCount,
        totalPrice,
        loadCart,
        removeItemFormCart,
        addItemToCart,
    }
}

export default useCart;