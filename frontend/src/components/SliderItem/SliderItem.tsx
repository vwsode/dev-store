import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '../shared/ui';

import s from './SliderItem.module.scss';

type Props = {
    title: string;
    image: string;
    link: string;
    category: string;
    price: number;
    newPrice?: number;
    isSale: boolean;
};

const SliderItem: FC<Props> = ({
    title,
    image,
    link,
    category,
    price,
    newPrice,
    isSale,
}) => {
    return (
        <div className={s['card']}>
            <NavLink className={s['overlay-link']} to={link} />
            <img className={s['image']} src={image} alt={title} />
            <div className={s['info']}>
                <div className={s['titles']}>
                    <Typography className={s['title']} bold variant="body1">
                        {title}
                    </Typography>
                    <Typography className={s['category']} bold variant="body1">
                        {category}
                    </Typography>
                </div>
                <div className={s['prices']}>
                    <Typography className={s['price']} bold variant="body1">
                        ${newPrice}
                    </Typography>
                    {isSale && (
                        <Typography
                            className={s['sale-price']}
                            bold
                            variant="body1"
                        >
                            ${price}
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SliderItem;
