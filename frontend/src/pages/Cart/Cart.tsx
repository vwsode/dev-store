import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '@/components/shared/ui/index.ts';

import CartSummary from './CartSummary/CartSummary';
import CartList from './CartList/CartList';

import useCart from '@/hooks/useCart';

import './Cart.scss';

const Cart = () => {
    const { loadCart } = useCart();

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
                        <CartList />
                    </div>
                    <CartSummary />
                </div>
            </Container>
        </section>
    );
};

export default Cart;
