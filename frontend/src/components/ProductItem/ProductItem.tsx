import { NavLink } from 'react-router-dom';
import { Typography } from '../shared/ui';

import s from './ProductItem.module.scss';

type Props = {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    salePrice: number;
};

const ProductItem = ({
    id,
    image,
    name,
    category,
    price,
    salePrice,
}: Props) => {
    return (
        <div className={s['card']}>
            <NavLink className={s['overlay']} to={id.toString()}></NavLink>
            <img className={s['image']} src={image} alt={name} />
            <div className={s['info']}>
                <div className={s['titles']}>
                    <Typography bold variant="body2">
                        {name}
                    </Typography>
                    <Typography className={s['category']} bold variant="body2">
                        {category}
                    </Typography>
                </div>
                <div className={s['prices']}>
                    <Typography
                        className={s['curr-price']}
                        bold
                        variant="body1"
                    >
                        ${price}
                    </Typography>
                    {!!salePrice && (
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

export default ProductItem;
