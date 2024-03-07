import { FC } from 'react';

import ProductItem from '@/components/ProductItem/ProductItem.tsx';

import { ProductCard } from '@/types/product.type.ts';

import s from './CatalogGrid.module.scss';

type Props = {
    products: ProductCard[];
    isLoading: boolean;
};

const CatalogGrid: FC<Props> = ({ products, isLoading }) => {
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
                    newPrice={product.newPrice}
                    isSale={product.isSale}
                    isLoading={isLoading}
                />
            ))}
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    image={product.mainImage}
                    name={product.product.name}
                    category={product.product.category}
                    price={product.price}
                    newPrice={product.newPrice}
                    isSale={product.isSale}
                    isLoading={isLoading}
                />
            ))}
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    image={product.mainImage}
                    name={product.product.name}
                    category={product.product.category}
                    price={product.price}
                    newPrice={product.newPrice}
                    isSale={product.isSale}
                    isLoading={isLoading}
                />
            ))}
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    image={product.mainImage}
                    name={product.product.name}
                    category={product.product.category}
                    price={product.price}
                    newPrice={product.newPrice}
                    isSale={product.isSale}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
};

export default CatalogGrid;
