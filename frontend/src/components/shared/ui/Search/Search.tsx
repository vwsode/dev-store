import { InputHTMLAttributes } from 'react';

import s from './Search.module.scss';

import IconSearch from '@/assets/icons/search.svg?react';

interface ISearch extends InputHTMLAttributes<HTMLInputElement> {}

const Search = ({ ...props }: ISearch) => {
    return (
        <label className={s['label']}>
            <i className={s['icon']}>
                <IconSearch />
            </i>
            <input className={s['input']} {...props} />
        </label>
    );
};

export default Search;
