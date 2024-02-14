import Container from "../../components/Container/Container.tsx";
import Button from "../../components/Button/Button.tsx";

import './ProductPage.scss';

const ProductPage = () => (
    <Container size="sm">
        <section className="product">
            <div className="product__images">
                <img src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/cfd82d2b-c8cc-4713-8b53-d305eb655e0c/dunk-low-retro-mens-shoes-76KnBL.png" alt=""/>
            </div>
            <div className="product__info">
                <div className="product__titles">
                    <h1 className="product__title">Nike Air Max 97 SE</h1>
                    <span className="product__subtitle">Men's Shoes</span>
                </div>
                <div className="product__text">
                    <span className="product__price">$120</span>
                </div>
                <div className="product__actions">
                    <Button variant="dark">
                        Add to bag
                    </Button>
                    <Button variant="light">
                        Favorite
                    </Button>
                </div>
            </div>
        </section>
    </Container>
);

export default ProductPage;