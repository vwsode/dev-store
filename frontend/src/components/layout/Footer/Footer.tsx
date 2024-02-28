import { NavLink } from 'react-router-dom';

import Container from '../../shared/ui/Container/Container.tsx';

import { ROUTES } from '../../../config/routes.ts';

import Facebook from '../../../assets/icons/facebook.svg?react';
import Instagram from '../../../assets/icons/instagram.svg?react';
import Twitter from '../../../assets/icons/twitter.svg?react';
import YouTube from '../../../assets/icons/youtube.svg?react';

import s from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={s['footer']}>
            <Container size="md">
                <div className={s['wrapper']}>
                    <div className={s['content']}>
                        <div className={s['columns']}>
                            <div className={s['column']}>
                                <div className={s['column-title']}>
                                    Get Help
                                </div>
                                <nav className={s['nav']}>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Order Status
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Delivery
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Returns
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Payment Options
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Contact Us On Nike.com Inquiries
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Contact Us On All Other Inquiries
                                    </NavLink>
                                </nav>
                            </div>
                            <div className={s['column']}>
                                <div className={s['column-title']}>
                                    About Nike
                                </div>
                                <nav className={s['nav']}>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        News
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Careers
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Investors
                                    </NavLink>
                                    <NavLink
                                        className={s['nav-link']}
                                        to={ROUTES.CATALOG}
                                    >
                                        Sustainability
                                    </NavLink>
                                </nav>
                            </div>
                        </div>
                        <div className={s['socials']}>
                            <a
                                className={s['socials-link']}
                                href="https://facebook.com"
                                target="_blank"
                            >
                                <Facebook />
                            </a>
                            <a
                                className={s['socials-link']}
                                href="https://instagram.com"
                                target="_blank"
                            >
                                <Instagram />
                            </a>
                            <a
                                className={s['socials-link']}
                                href="https://twitter.com"
                                target="_blank"
                            >
                                <Twitter />
                            </a>
                            <a
                                className={s['socials-link']}
                                href="https://youTube.com"
                                target="_blank"
                            >
                                <YouTube />
                            </a>
                        </div>
                    </div>
                    <div className={s['bottom']}>
                        <span className={s['policy']}>
                            © 2023 Nike, Inc. All Rights Reserved
                        </span>
                        <div className={s['bottom-links']}>
                            <a className={s['bottom-link']} href="#">
                                Guides
                            </a>
                            <a className={s['bottom-link']} href="#">
                                Terms of Sale
                            </a>
                            <a className={s['bottom-link']} href="#">
                                Terms of Use
                            </a>
                            <a className={s['bottom-link']} href="#">
                                Nike Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
