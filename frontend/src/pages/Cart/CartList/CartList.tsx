import { FC, Fragment } from 'react';

import CartItem from '@/components/CartItem/CartItem';
import { Typography } from '@/components/shared/ui';

import type { CartItem as CartItemType } from '@/types/cart.type';

import s from './CartList.module.scss';

type Props = {
    items: CartItemType[];
    loading?: boolean;
};

const CartList: FC<Props> = ({ items, loading = false }) => {
    return (
        <>
            {items.length ? (
                <div className={s['items']}>
                    {items.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <CartItem
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
