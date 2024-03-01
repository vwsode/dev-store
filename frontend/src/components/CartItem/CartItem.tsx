import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { NavLink } from 'react-router-dom';

// import { Typography } from '@/shared/ui/index.ts';

import useCart from '@/hooks/useCart.ts';

import s from './CartItem.module.scss';

type Props = {
    name: string;
    price: number;
    category: string;
    id: number;
    image: string;
    isLoading: boolean;
};

const CartItem: FC<Props> = ({
    name,
    price,
    category,
    id,
    image,
    isLoading,
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
            {/* <Typography /> */}
            <div className={s['content']}>
                <div className={s['info']}>
                    <div className={s['info-left']}>
                        <h5 className="cart-item__title">
                            <NavLink to={`/catalog/${id}`}>{name}</NavLink>
                        </h5>
                        <h6 className="cart-item__subtitle">{category}</h6>
                    </div>
                    <div className={s['info-right']}>
                        <span className="cart-item__price">${price}</span>
                    </div>
                </div>

                <div className={s['actions']}>
                    <button className="cart-item__action-btn">
                        {/*<FavIcon />*/}
                    </button>
                    <button
                        className="cart-item__action-btn"
                        onClick={() => removeItemFormCart(id)}
                    >
                        {/*<TrashIcon />*/}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
