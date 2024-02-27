import ContentLoader from 'react-content-loader';
import { NavLink } from 'react-router-dom';
import useCart from '../../../hooks/useCart.ts';
import { CartItem as CartItemType } from '../../../types/types';

import './CartItem.scss';

interface ICartItem extends Partial<CartItemType> {
    id: number;
    isLoading?: boolean;
}

const CartItem = ({
    name,
    price,
    category,
    id,
    main_image,
    isLoading,
}: ICartItem) => {
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
        <div className="cart-item">
            <NavLink to="/catalog/1">
                <img className="cart-item__img" src={main_image} alt="" />
            </NavLink>
            <div className="cart-item__content">
                <div className="cart-item__info">
                    <div className="cart-item__info-left">
                        <h5 className="cart-item__title">
                            <NavLink to={`/catalog/${id}`}>{name}</NavLink>
                        </h5>
                        <h6 className="cart-item__subtitle">{category}</h6>
                    </div>
                    <div className="cart-item__info-right">
                        <span className="cart-item__price">${price}</span>
                    </div>
                </div>

                <div className="cart-item__actions">
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
