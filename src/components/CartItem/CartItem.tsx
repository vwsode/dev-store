import './CartItem.scss';
import TrashIcon from '../../assets/icons/trash.svg?react';
import FavIcon from '../../assets/icons/favorite.svg?react';
import {NavLink} from "react-router-dom";

const CartItem = () => {
    return (
        <div className="cart-item">
            <NavLink to="/catalog/1">
                <img className="cart-item__img"
                     src="https://secure-images.nike.com/is/image/DotCom/FJ9479_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=154&fmt=jpg"
                     alt=""/>
            </NavLink>
            <div className="cart-item__content">
                <div className="cart-item__info">
                    <div className="cart-item__info-left">
                        <h5 className="cart-item__title">
                            <NavLink to="/catalog/1">
                                Nike Air Max Dn
                            </NavLink>
                        </h5>
                        <h6 className="cart-item__subtitle">Men's Shoes</h6>
                    </div>
                    <div className="cart-item__info-right">
                        <span className="cart-item__price">$200</span>
                    </div>
                </div>

                <div className="cart-item__actions">
                    <button className="cart-item__action-btn">
                        <FavIcon/>
                    </button>
                    <button className="cart-item__action-btn">
                        <TrashIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;