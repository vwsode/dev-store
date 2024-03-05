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
    salePrice?: number;
};

const SliderItem: FC<Props> = ({
    title,
    image,
    link,
    category,
    price,
    salePrice,
}) => {
    return (
        <div className={s['card']}>
            <NavLink className={s['overlay-link']} to={link} />
            <img src={image} alt="" />
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
                        ${price}
                    </Typography>
                    {salePrice && (
                        <Typography
                            className={s['sale-price']}
                            bold
                            variant="body1"
                        >
                           ${salePrice}
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SliderItem;
