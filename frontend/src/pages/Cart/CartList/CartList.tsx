import { FC, Fragment } from 'react';

import CartItem from '@/components/CartItem/CartItem';
import { Typography } from '@/components/shared/ui';

import useCart from '@/hooks/useCart';

import s from './CartList.module.scss';

const CartList: FC = () => {
    const { cart, loading } = useCart();

    return (
        <>
            {cart.length ? (
                <div className={s['items']}>
                    {cart.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <CartItem
                                    size={item.size}
                                    quantity={item.quantity}
                                    isLoading={loading}
                                    id={item.productItem.id}
                                    image={
                                        'http://127.0.0.1:8000/' +
                                        item.productItem.mainImage
                                    }
                                    name={item.productItem.product.name}
                                    price={item.totalPrice}
                                    category={item.productItem.product.category}
                                />
                                <hr />
                            </Fragment>
                        );
                    })}
                </div>
            ) : (
                <Typography variant="body2" className={s['message']}>
                    There are no items in your bag.
                </Typography>
            )}
        </>
    );
};

export default CartList;
