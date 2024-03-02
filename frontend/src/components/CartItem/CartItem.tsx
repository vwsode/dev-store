import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import { Typography } from '../shared/ui';

import { Size } from '@/types/product.type';
import useCart from '@/hooks/useCart.ts';

import FavIcon from '@/assets/icons/favorite.svg?react';
import TrashIcon from '@/assets/icons/trash.svg?react';

import s from './CartItem.module.scss';

type Props = {
    name: string;
    price: number;
    salePrice?: number;
    category: string;
    id: number;
    image: string;
    isLoading: boolean;
    size: Size;
    quantity: number;
};

const CartItem: FC<Props> = ({
    name,
    price,
    salePrice,
    category,
    id,
    image,
    isLoading,
    quantity,
    size,
}) => {
    const { removeItemFormCart } = useCart();

    if (isLoading) {
        return (
            <ContentLoader
                speed={2}
                width={768}
                height={158}
                viewBox="0 0 768 158"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="4" rx="0" ry="0" width="154" height="154" />
                <rect x="170" y="4" rx="0" ry="0" width="83" height="20" />
                <rect x="170" y="34" rx="0" ry="0" width="163" height="20" />
                <rect x="702" y="4" rx="0" ry="0" width="58" height="20" />
            </ContentLoader>
        );
    }

    return (
        <div className={s['card']}>
            <NavLink to="/catalog/1">
                <img className={s['image']} src={image} alt="" />
            </NavLink>
            <div className={s['content']}>
                <div className={s['info']}>
                    <div className={s['info-left']}>
                        <Typography bold variant="body1" className={s['title']}>
                            <NavLink to={`/catalog/${id}`}>{name}</NavLink>
                        </Typography>
                        <Typography
                            bold
                            variant="body1"
                            className={s['subtitle']}
                        >
                            {category}
                        </Typography>
                        <div className={s['params']}>
                            <div className={s['param']}>
                                <Typography
                                    bold
                                    className={s['param-title']}
                                    variant="subtitle1"
                                >
                                    Size
                                </Typography>
                                <Typography
                                    className={s['param-value']}
                                    variant="subtitle1"
                                >
                                    {size.size}
                                </Typography>
                            </div>
                            <div className={s['param']}>
                                <Typography
                                    bold
                                    className={s['param-title']}
                                    variant="subtitle1"
                                >
                                    Quantity
                                </Typography>
                                <Typography
                                    className={s['param-value']}
                                    variant="subtitle1"
                                >
                                    {quantity}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={s['info-right']}>
                        <Typography bold variant="body2" className={s['price']}>
                            ${price}
                        </Typography>
                        {salePrice && (
                            <Typography
                                bold
                                variant="body2"
                                className={s['sale-price']}
                            >
                                ${salePrice}
                            </Typography>
                        )}
                    </div>
                </div>

                <div className={s['actions']}>
                    <button className={s['action']}>
                        <FavIcon />
                    </button>
                    <button
                        className={s['action']}
                        onClick={() => removeItemFormCart(id)}
                    >
                        <TrashIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
