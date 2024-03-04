import { FC } from 'react';
import { Button, Typography } from '@/components/shared/ui';

import useCart from '@/hooks/useCart';

import s from './CartSummary.module.scss';

const CartSummary: FC = () => {
    const { cart, totalPrice } = useCart();

    return (
        <div className={s['summary']}>
            <Typography variant="h5">Summary</Typography>
            <div className={s['options']}></div>
            <div className={s['total']}>
                <Typography className={s['total-title']} variant="body2">
                    Total
                </Typography>
                <Typography className={s['total-value']} variant="body2">
                    {cart.length ? `$${totalPrice}` : '—'}
                </Typography>
            </div>
            <Button variant="dark">Checkout</Button>
        </div>
    );
};

export default CartSummary;
