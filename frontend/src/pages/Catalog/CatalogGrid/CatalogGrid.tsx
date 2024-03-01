import { FC } from 'react';

import ProductItem from '@/components/ProductItem/ProductItem.tsx';

import { ProductCard } from '@/types/product.type.ts';

import s from './CatalogGrid.module.scss';

type Props = {
    products: ProductCard[];
};

const CatalogGrid: FC<Props> = ({ products }) => {
    return (
        <div className={s['grid']}>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    image={product.mainImage}
                    name={product.product.name}
                    category={product.product.category}
                    price={product.price}
                    salePrice={product.salePrice}
                />
            ))}
        </div>
    );
};

export default CatalogGrid;
