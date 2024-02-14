import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {
    addToCart as addToCartAction,
    decreaseQuantity as decreaseQuantityAction,
    increaseQuantity as increaseQuantityAction,
    removeFromCart as removeFromCartAction
} from "../store/slices/cartSlice.ts";


const useCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {cart} = useSelector((state: RootState) => state.cart);

    const addToCart = () => {
        dispatch(addToCartAction);
    }

    const decreaseQuantity = () => {
        dispatch(decreaseQuantityAction);
    }
    const increaseQuantity = () => {
        dispatch(increaseQuantityAction);
    }
    const removeFromCart = () => {
        dispatch(removeFromCartAction);
    }


    return {cart, addToCart, decreaseQuantity, increaseQuantity, removeFromCart};
}

export default useCart;