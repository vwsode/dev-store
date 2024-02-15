import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {fetchProducts, fetchProduct} from "../store/slices/productsSlice.ts";


const useProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {products, loading, product} = useSelector((state: RootState) => state.products);

    const setProduct = (id: number) => {
        dispatch(fetchProduct(id));
    }

    const setProducts = () => {
        dispatch(fetchProducts());
    }

    return {product, products, loading, setProduct, setProducts};
}

export default useProducts;