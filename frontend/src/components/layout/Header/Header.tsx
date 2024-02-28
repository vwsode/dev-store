import { NavLink } from 'react-router-dom';

import useCart from '../../../hooks/useCart.ts';

import Container from '../../shared/ui/Container/Container.tsx';
import Search from '../../shared/ui/Search/Search.tsx';

import { ROUTES } from '../../../config/routes.ts';
import { HEADER_NAV } from '../../../config/navigation.ts';

import NikeLogo from '../../../assets/icons/nike-logo.svg?react';
import CartIcon from '../../../assets/icons/cart.svg?react';
import FavIcon from '../../../assets/icons/favorite.svg?react';

import s from './Header.module.scss';

const Header = () => {
    const { cart } = useCart();

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
                            <Search placeholder="Search" />
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
