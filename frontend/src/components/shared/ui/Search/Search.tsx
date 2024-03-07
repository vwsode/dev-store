import { InputHTMLAttributes } from 'react';

import * as S from './Search.styles.ts';

import IconSearch from '@/assets/icons/search.svg?react';

interface ISearch extends InputHTMLAttributes<HTMLInputElement> {}

const Search = ({ ...props }: ISearch) => {
    return (
        <S.Label>
            <S.IconSearch>
                <IconSearch />
            </S.IconSearch>
            <S.Input {...props} />
        </S.Label>
    );
};

export default Search;
