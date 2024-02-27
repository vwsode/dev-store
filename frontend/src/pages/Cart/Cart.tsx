import { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CartItem from '../../components/cart/Item/CartItem.tsx';
import Container from '../../components/shared/ui/Container/Container.tsx';
import Button from '../../components/shared/ui/Button/Button.tsx';

import './Cart.scss';
import useCart from '../../hooks/useCart.ts';

const Cart = () => {
    const { cart, loadCart, totalPrice, loading } = useCart();

    useEffect(() => {
        loadCart();
    }, []);

    return (
        <section className="cart">
            <Container size="sm">
                <div className="cart__wrapper">
                    <div className="cart__left">
                        <div className="cart__message">
                            <h6 className="cart__message-title">
                                Free Delivery
                            </h6>
                            <div className="cart__message-text">
                                <p>Applies to orders of ₹ 14 000.00 or more.</p>
                                <NavLink to="/catalog">View details</NavLink>
                            </div>
                        </div>
                        <h2 className="cart__title">Bag</h2>
                        {cart.length ? (
                            <div className="cart__items">
                                {cart.map((item) => (
                                    <Fragment key={item.id}>
                                        <CartItem
                                            isLoading={loading}
                                            id={item.id}
                                            images={item.images}
                                            name={item.name}
                                            price={item.price}
                                            category={item.category}
                                        />
                                        <hr />
                                    </Fragment>
                                ))}
                            </div>
                        ) : (
                            <p className="cart-empty-message">
                                There are no items in your bag.
                            </p>
                        )}
                    </div>
                    <div className="cart-summary">
                        <h6 className="cart-summary__title">Summary</h6>
                        <div className="cart-summary__options"></div>
                        <div className="cart-summary__total">
                            <span className="cart-summary__total-title">
                                Total
                            </span>
                            <span className="cart-summary__total-value">
                                {cart.length ? `$${totalPrice}` : '—'}
                            </span>
                        </div>
                        <Button variant="dark">Checkout</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Cart;
