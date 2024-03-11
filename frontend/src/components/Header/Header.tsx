import { ChangeEvent } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Search, Typography } from '@/components/shared/ui';

import { ROUTES } from '@/config/routes.ts';
import { HEADER_NAV } from '@/config/navigation.ts';
import useCart from '@/hooks/useCart.ts';
import useSearch from '@/hooks/useSearch';

import NikeLogo from '@/assets/icons/nike-logo.svg?react';
import CartIcon from '@/assets/icons/cart.svg?react';
import FavIcon from '@/assets/icons/favorite.svg?react';

import s from './Header.module.scss';
import ProductItemMini from '../ProductItemMini/ProductItemMini';

const Header = () => {
    const { cart } = useCart();
    const { searchTerm, setSearch, result } = useSearch();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
    };

    return (
        <>
            <header className={s['header']}>
                <Container>
                    <div className={s['wrapper']}>
                        <NavLink className={s['logo']} to={ROUTES.MAIN}>
                            <NikeLogo />
                        </NavLink>
                        <nav className={s['nav']}>
                            <ul className={s['nav-list']}>
                                {HEADER_NAV.map((item, idx) => (
                                    <li className={s['nav-item']} key={idx}>
                                        <NavLink
                                            className={s['nav-link']}
                                            to={item.path}
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={s['actions']}>
                            <div className={s['search']}>
                                <Search
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    placeholder="Search"
                                />
                                {searchTerm && (
                                    <div className={s['search-list']}>
                                        {result.map((item) => (
                                            <ProductItemMini
                                                image={item.mainImage}
                                                title={item.product.name}
                                                link={`${ROUTES.CATALOG + '/' + item.id}`}
                                                key={item.id}
                                            />
                                        ))}
                                        {!result.length && (
                                            <Typography variant="body2">
                                                Nothing found
                                            </Typography>
                                        )}
                                    </div>
                                )}
                            </div>
                            <NavLink
                                className={s['action']}
                                to={ROUTES.FAVORITES}
                            >
                                <FavIcon />
                            </NavLink>
                            <NavLink className={s['action']} to={ROUTES.CART}>
                                <CartIcon />
                                {cart.length ? (
                                    <span className={s['action__badge']}>
                                        {cart.length}
                                    </span>
                                ) : (
                                    ''
                                )}
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
