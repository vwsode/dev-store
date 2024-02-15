import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {
    fetchFavoriteItems,
    toggleFavorite as toggleFavoriteAction
} from "../store/slices/favoriteSlice.ts";

const useFavorites = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        favorites,
        loading
    } = useSelector((state: RootState) => state.favorites);

    const toggleFavorite = (id: number) => {
        dispatch(toggleFavoriteAction(id));
    }

    const loadFavorite = () => {
        dispatch(fetchFavoriteItems());
    }

    return {
        favorites,
        loading,
        loadFavorite,
        toggleFavorite,
    }
}

export default useFavorites;