import ProductItem from "../../components/ProductItem/ProductItem.tsx";
import Container from "../../components/Container/Container.tsx";

import './CatalogPage.scss';

const CatalogPage = () => (
    <div>
        <Container>
            <div className="catalog-grid">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </Container>
    </div>
);

export default CatalogPage;