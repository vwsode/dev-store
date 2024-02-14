import ProductItem from "../../components/ProductItem/ProductItem.tsx";
import Container from "../../components/Container/Container.tsx";

import './CatalogPage.scss';
import useProducts from "../../hooks/useProducts.ts";
import {useEffect} from "react";

const CatalogPage = () => {
    const {products, setProducts} = useProducts();

    useEffect(() => {
        setProducts();
    }, []);

    return (
        <div>
            <Container>
                <div className="catalog-grid">
                    {products.map((item) => (
                        <ProductItem key={item.id}
                                     id={item.id}
                                     title={item.title}
                                     price={item.price}
                                     description={item.description}
                                     category={item.category}
                                     images={item.images}

                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default CatalogPage;