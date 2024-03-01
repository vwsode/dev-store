import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import { ProductForm } from '@components/shared/form';
import { Typography } from '@components/shared/ui';
import { ReviewsList } from '@components/reviews';

import useProduct from '@/hooks/useProduct';

import s from './ProdcutInfo.module.scss';
import { ROUTES } from '@/config/routes';

type Props = {
    isLoading?: boolean;
};

const ProductInfo: FC<Props> = ({ isLoading = false }) => {
    const { product } = useProduct();

    return (
        <div className={s['info']}>
            {isLoading ? (
                <>
                    <ContentLoader
                        speed={2}
                        width={375}
                        height={56}
                        viewBox="0 0 375 56"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            width="375"
                            height="32"
                        />
                        <rect
                            x="0"
                            y="39"
                            rx="0"
                            ry="0"
                            width="375"
                            height="23"
                        />
                    </ContentLoader>
                    <ContentLoader
                        speed={2}
                        width={375}
                        height={23}
                        viewBox="0 0 375 23"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            width="375"
                            height="23"
                        />
                    </ContentLoader>
                    <ContentLoader
                        speed={2}
                        width={375}
                        height={146}
                        viewBox="0 0 375 146"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />
                        <rect
                            x="76"
                            y="0"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />
                        <rect
                            x="152"
                            y="0"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />
                        <rect
                            x="228"
                            y="0"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />
                        <rect
                            x="304"
                            y="0"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />

                        <rect
                            x="0"
                            y="76"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />
                        <rect
                            x="76"
                            y="76"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />
                        <rect
                            x="152"
                            y="76"
                            rx="0"
                            ry="0"
                            width="70"
                            height="70"
                        />
                    </ContentLoader>
                </>
            ) : (
                <>
                    <div className={s['titles']}>
                        <Typography variant="h2">
                            {product.product.name}
                        </Typography>
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
                            className={s['color-item-active']}
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
                                <img
                                    src={
                                        'http://127.0.0.1:8000/' +
                                        item.mainImage
                                    }
                                />
                            </NavLink>
                        ))}
                    </div>
                </>
            )}

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
