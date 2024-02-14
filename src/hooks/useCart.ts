import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {
    addToCart as addToCartAction,
    decreaseQuantity as decreaseQuantityAction, fetchCart,
    increaseQuantity as increaseQuantityAction,
    removeFromCart as removeFromCartAction
} from "../store/slices/cartSlice.ts";


const useCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {cart, loading} = useSelector((state: RootState) => state.cart);

    // const isItemInCart = (id) => {
    //     const item = cart.find(item => item.id === id);
    // }

    const getTotal = (): number => {
        let total: number = 0;

        cart.forEach((item) => {
            total += parseInt(item.price);
        })

        return total;
    }

    const setCart = () => {
        dispatch(fetchCart());
    }

    const addToCart = (product) => {
        dispatch(addToCartAction(product));
    }

    const decreaseQuantity = (id) => {
        dispatch(decreaseQuantityAction(id));
    }
    const increaseQuantity = (id) => {
        dispatch(increaseQuantityAction(id));
    }
    const removeFromCart = (id) => {
        dispatch(removeFromCartAction(id));
    }


    return {cart, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, getTotal, setCart, loading};
}

export default useCart;