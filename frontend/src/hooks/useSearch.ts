import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.ts';
import { searchCatalog, setSearchTerm } from '@/store/slices/searchSlice.ts';
import { useDebounce } from '@hooks/useDebounce.ts';
import { useEffect } from 'react';

const useSearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const search = useSelector((state: RootState) => state.search);

    const debouncedSearch = useDebounce(search.searchTerm);

    const makeSearch = (term: string) => {
        dispatch(searchCatalog(term));
    };

    const setSearch = (value: string) => {
        dispatch(setSearchTerm(value));
    };

    useEffect(() => {
        makeSearch(debouncedSearch);
    }, [debouncedSearch]);

    return {
        loading: search.loading,
        error: search.error,
        result: search.searchResults,
        searchTerm: search.searchTerm,
        setSearch,
    };
};

export default useSearch;
