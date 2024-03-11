import { NavLink } from 'react-router-dom';

import { Container } from '../shared/ui';

import useUser from '@/hooks/useUser';
import { ROUTES } from '@/config/routes';

import JordanLogo from '@/assets/icons/jordan-logo.svg?react';
import UserIcon from '@/assets/icons/user.svg?react';

import s from './PreHeader.module.scss';

const PreHeader = () => {
    const { user } = useUser();

    return (
        <div className={s['header-top']}>
            <Container>
                <div className={s['wrapper']}>
                    <NavLink className={s['logo']} to={ROUTES.CATALOG}>
                        <JordanLogo />
                    </NavLink>
                    <nav className={s['nav']}>
                        <ul className={s['nav-list']}>
                            <li className={s['nav-item']}>
                                <NavLink
                                    className={s['nav-link']}
                                    to={ROUTES.CATALOG}
                                >
                                    Find a Store
                                </NavLink>
                            </li>
                            |
                            <li className={s['nav-item']}>
                                <NavLink
                                    className={s['nav-link']}
                                    to={ROUTES.CATALOG}
                                >
                                    Help
                                </NavLink>
                            </li>
                            |
                            {user ? (
                                <>
                                    <li className={s['nav-item']}>
                                        <NavLink
                                            className={s['nav-link']}
                                            to={ROUTES.PROFILE}
                                        >
                                            Hi, {user.username}
                                            <UserIcon />
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className={s['nav-item']}>
                                        <NavLink
                                            className={s['nav-link']}
                                            to={ROUTES.REGISTER}
                                        >
                                            Join Us
                                        </NavLink>
                                    </li>
                                    |
                                    <li className={s['nav-item']}>
                                        <NavLink
                                            className={s['nav-link']}
                                            to={ROUTES.LOGIN}
                                        >
                                            Sign In
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    );
};

export default PreHeader;
