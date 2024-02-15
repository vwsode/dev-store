import {Fragment, useEffect} from "react";
import {NavLink} from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem.tsx";
import Container from "../../components/Container/Container.tsx";
import Button from "../../components/Button/Button.tsx";

import './Cart.scss';
import useCart from "../../hooks/useCart.ts";

const Cart = () => {
    const {cart, loadCart, totalPrice, loading} = useCart();

    useEffect(() => {
        loadCart();
    }, [])

    // PRIVIET DENIS

    return (
        <section className='cart'>
            <Container size="sm">
                <div className="cart__wrapper">
                    <div className="cart__left">
                        <div className="cart__message">
                            <h6 className="cart__message-title">Free Delivery</h6>
                            <div className="cart__message-text">
                                <p>Applies to orders of ₹ 14 000.00 or more.</p>
                                <NavLink to='/catalog'>View details</NavLink>
                            </div>
                        </div>
                        <h2 className="cart__title">Bag</h2>
                        <div className="cart__items">
                            {cart.map((item) => (
                                <Fragment key={item.id}>
                                    {!loading ?
                                        (
                                            <CartItem
                                                id={item.id}
                                                images={item.images}
                                                title={item.title}
                                                price={item.price}
                                                category={item.category}
                                            />
                                        ) : <CartItem.Skeleton></CartItem.Skeleton>
                                    }
                                    <hr/>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="cart-summary">
                        <h6 className="cart-summary__title">Summary</h6>
                        <div className="cart-summary__options">

                        </div>
                        <div className="cart-summary__total">
                            <span className="cart-summary__total-title">Total</span>
                            <span className="cart-summary__total-value">${totalPrice}</span>
                        </div>
                        <Button variant="dark">Checkout</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Cart;