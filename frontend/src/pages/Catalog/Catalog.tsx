import { useEffect } from 'react';

import CatalogGrid from './CatalogGrid/CatalogGrid.tsx';

import { Container } from '@/components/shared/ui/index.ts';

import useProducts from '@/hooks/useProducts.ts';

const Catalog = () => {
    const { products, setProducts } = useProducts();

    useEffect(() => {
        setProducts();
    }, []);

    return (
        <div>
            <Container>
                <CatalogGrid products={products} />
            </Container>
        </div>
    );
};

export default Catalog;
