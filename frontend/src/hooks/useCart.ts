import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.ts';
import {
    fetchCartItems,
    removeFromCart,
    addToCart,
} from '../store/slices/cartSlice.ts';

const useCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { cart, loading, totalCount, totalPrice } = useSelector(
        (state: RootState) => state.cart,
    );

    const isItemInCart = (id: number) => {
        return cart.some((item) => item.productItem.id === Number(id));
    };

    const loadCart = () => {
        dispatch(fetchCartItems());
    };

    const removeItemFormCart = (productId: number, sizeId: number) => {
        dispatch(
            removeFromCart({
                productId,
                sizeId,
            }),
        );
    };

    const addItemToCart = (
        productId: number,
        quantity: number,
        sizeId: number,
    ) => {
        dispatch(
            addToCart({
                productId,
                quantity,
                sizeId,
            }),
        );
    };

    return {
        cart,
        loading,
        totalCount,
        totalPrice,
        loadCart,
        removeItemFormCart,
        addItemToCart,
        isItemInCart,
    };
};

export default useCart;
