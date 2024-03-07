import { NavLink } from 'react-router-dom';
import { Typography } from '../shared/ui';

import s from './ProductItem.module.scss';

type Props = {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    newPrice: number;
    isSale: boolean;
    isLoading?: boolean;
};

const ProductItem = ({
    id,
    image,
    name,
    category,
    price,
    newPrice,
    isSale,
    isLoading = false,
}: Props) => {
    return (
        <div className={s['card']}>
            <NavLink className={s['overlay']} to={id.toString()}></NavLink>
            {isLoading ? (
                <div className={s['image-loading']}>
                    <img
                        className={s['image']}
                        src="https://cdn140.picsart.com/269683146015211.png"
                        alt=""
                    />
                </div>
            ) : (
                <img className={s['image']} src={image} alt={name} />
            )}
            <div className={s['info']}>
                <div className={s['titles']}>
                    <Typography bold variant="body1">
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

export default ProductItem;
