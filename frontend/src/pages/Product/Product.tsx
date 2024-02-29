import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@/components/shared/ui/index.ts';

import ProductInfo from './ProductInfo/ProductInfo.tsx';
import ProductImagesSlider from './ProductImagesSlider/ProductImagesSlider.tsx';

import useProduct from '@/hooks/useProduct.ts';

import s from './Product.module.scss';

const Product = () => {
    const { id } = useParams();
    const { setProduct } = useProduct();

    useEffect(() => {
        if (id) {
            setProduct(Number(id));
        }
    }, [id]);

    return (
        <Container size="sm">
            <section className={s['product']}>
                <ProductImagesSlider />
                <ProductInfo />
            </section>
        </Container>
    );
};

export default Product;
