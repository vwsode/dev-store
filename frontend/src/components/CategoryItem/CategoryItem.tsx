import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '../shared/ui';

import s from './CategoryItem.module.scss';

type Props = {
    image: string;
    link: string;
    title: string;
    preTitle?: string;
};

const CategoryItem: FC<Props> = ({ image, link, title, preTitle }) => {
    return (
        <div className={s['card']}>
            <img className={s['image']} src={image} alt={title} />
            <div className={s['text']}>
                <Typography className={s['pre-title']} variant="body1">
                    {preTitle}
                </Typography>
                <Typography className={s['title']} variant="h5">
                    {title}
                </Typography>
                <Button
                    className={s['link']}
                    to={link}
                    asLink={true}
                    size="xs"
                    variant="dark"
                >
                    Shop
                </Button>
            </div>
            <NavLink className={s['overlay']} to={link} />
        </div>
    );
};

export default CategoryItem;
