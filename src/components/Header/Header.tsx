import {NavLink} from "react-router-dom";

import Container from "../Container/Container.tsx";

import {ROUTES} from "../../config/routes.ts";

import NikeLogo from "../../assets/icons/nike-logo.svg?react";
import JordanLogo from "../../assets/icons/jordan-logo.svg?react";
import CartIcon from "../../assets/icons/cart.svg?react";
import FavIcon from "../../assets/icons/favorite.svg?react";

import './Header.scss';

const Header = () => {
    return (
        <>
            <div className='header-top'>
                <Container>
                    <div className='header-top__wrapper'>
                        <div  className="header-top__logo">
                            <JordanLogo/>
                        </div>
                        <nav className='header-top__nav'>
                            <ul className="header-top__nav-list">
                                <li className="header-top__nav-item">
                                    <NavLink className='header-top__nav-link' to={ROUTES.CATALOG}>Find a Store</NavLink>
                                </li>
                                |
                                <li className="header-top__nav-item">
                                    <NavLink className='header-top__nav-link' to={ROUTES.CATALOG}>Help</NavLink>
                                </li>
                                |
                                <li className="header-top__nav-item">
                                    <NavLink className='header-top__nav-link' to={ROUTES.CATALOG}>Join Us</NavLink>
                                </li>
                                |
                                <li className="header-top__nav-item">
                                    <NavLink className='header-top__nav-link' to={ROUTES.LOGIN}>Sign In</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </div>
            <header className='header'>
                <Container>
                    <div className='header__wrapper'>
                        <NavLink to={ROUTES.MAIN} className="header__logo">
                            <NikeLogo/>
                        </NavLink>
                        <nav className='header__nav nav'>
                            <ul className='nav__list'>
                                <li className='nav__item'>
                                    <NavLink className='nav__link' to={ROUTES.CATALOG}>New & Featured</NavLink>
                                </li>
                                <li className='nav__item'>
                                    <NavLink className='nav__link' to={ROUTES.CATALOG}>Men</NavLink>
                                </li>
                                <li className='nav__item'>
                                    <NavLink className='nav__link' to={ROUTES.CATALOG}>Women</NavLink>
                                </li>
                                <li className='nav__item'>
                                    <NavLink className='nav__link' to={ROUTES.CATALOG}>Kids</NavLink>
                                </li>
                                <li className='nav__item'>
                                    <NavLink className='nav__link' to={ROUTES.CATALOG}>Sale</NavLink>
                                </li>
                                <li className='nav__item'>
                                    <NavLink className='nav__link' to={ROUTES.CATALOG}>SNKERS</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__btns">
                            <NavLink className='header-action-btn' to={ROUTES.FAVORITES}>
                                <FavIcon/>
                            </NavLink>
                            <NavLink className='header-action-btn' to={ROUTES.CART}>
                                <CartIcon/>
                                <span className='header-action-btn__badge'>5</span>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;