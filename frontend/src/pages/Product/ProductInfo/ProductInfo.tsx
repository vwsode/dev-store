import { NavLink } from 'react-router-dom';

import { ProductForm } from '@components/shared/form';
import { Typography } from '@components/shared/ui';
import { ReviewsList } from '@components/reviews';

import useProduct from '@/hooks/useProduct';

import s from './ProdcutInfo.module.scss';
import { ROUTES } from '@/config/routes';

const ProductInfo = () => {
    const { product } = useProduct();

    return (
        <div className={s['info']}>
            <div className={s['titles']}>
                <Typography variant="h2">{product.product.name}</Typography>
                <Typography variant="body2">
                    {product.product.category}
                </Typography>
            </div>
            <div className={s['text']}>
                <Typography bold variant="body2">
                    ${product.price}
                </Typography>
                {!!product.salePrice && (
                    <Typography
                        bold
                        variant="body2"
                        className={s['sale-price']}
                    >
                        ${product.salePrice}
                    </Typography>
                )}
            </div>
            <div className={s['colors']}>
                <NavLink
                    className={s['color-item']}
                    to={`${ROUTES.CATALOG}/${product.id}`}
                    key={product.id}
                >
                    <img src={product.mainImage} />
                </NavLink>
                {product.additionalProductItems.map((item) => (
                    <NavLink
                        className={s['color-item']}
                        to={`${ROUTES.CATALOG}/${item.id}`}
                        key={item.id}
                    >
                        <img src={'http://127.0.0.1:8000/' + item.mainImage} />
                    </NavLink>
                ))}
            </div>

            <ProductForm />

            <Typography variant="body1">
                {product.product.description}
            </Typography>

            <ReviewsList
                productName={product.product.name}
                reviews={product.product.reviews}
                totalRating={3}
            />
        </div>
    );
};

export default ProductInfo;
