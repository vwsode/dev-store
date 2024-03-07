import { useEffect } from 'react';

import CatalogGrid from './CatalogGrid/CatalogGrid.tsx';
import CatalogControls from './CatalogControls/CatalogControls.tsx';
import CatalogFilter from './CatalogFilter/CatalogFilter.tsx';

import { Container } from '@/components/shared/ui/index.ts';

import useProducts from '@/hooks/useProducts.ts';

import s from './Catalog.module.scss';

const Catalog = () => {
    const { products, setProducts, loading } = useProducts();

    useEffect(() => {
        setProducts();
    }, []);

    return (
        <div className={s['wrapper']}>
            <CatalogControls />
            <Container>
                <div className={s['grid-wrapper']}>
                    <CatalogFilter />
                    <CatalogGrid isLoading={loading} products={products} />
                </div>
            </Container>
        </div>
    );
};

export default Catalog;
