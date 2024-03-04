import { NavLink } from 'react-router-dom';

import { FC } from 'react';

import s from './Banner.module.scss';

type Props = {
    image: string;
    link?: string;
};

const Banner: FC<Props> = ({ image, link = '' }) => {
    return (
        <section className={s['section']}>
            <img className={s['image']} src={image} alt="" />
            {link && <NavLink className={s['link']} to={link}></NavLink>}
        </section>
    );
};

export default Banner;
