import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.ts';
import { fetchProduct } from '../store/slices/productsSlice.ts';

const useProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, product } = useSelector(
        (state: RootState) => state.products,
    );

    const setProduct = async (id: number) => {
        await dispatch(fetchProduct(id));
    };

    return { product, loading, setProduct };
};

export default useProduct;
