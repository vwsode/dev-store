import Container from "../../components/Container/Container.tsx";
import Button from "../../components/Button/Button.tsx";

import './ProductPage.scss';
import {useParams} from "react-router";
import useProducts from "../../hooks/useProducts.ts";
import {useEffect} from "react";
import useCart from "../../hooks/useCart.ts";

const ProductPage = () => {
    const {id} = useParams();
    const {product, setProduct, loading} = useProducts();
    const {cart, addToCart, removeFromCart} = useCart();

    useEffect(() => {
        if (id)
            setProduct(parseInt(id));
    }, []);


    const addToCartHandler = () => {
        addToCart(product);
    }

    const removeCartHandler = () => {
        removeFromCart(id);
    }

    const isItemInCart = cart.some((item) => item.id == id);

    return (
        <Container size="sm">
            <section className="product">
                <div className="product__images">
                    {product.images.map((img) => (
                        <img key={img} src={img} alt="Image "/>
                    ))}
                </div>
                <div className="product__info">
                    <div className="product__titles">
                        <h1 className="product__title">{product.title}</h1>
                        <span className="product__subtitle">{product.category.name}</span>
                    </div>
                    <div className="product__text">
                        <span className="product__price">${product.price}</span>
                    </div>
                    <div className="product__actions">
                        {isItemInCart ? (
                            <Button variant="dark" onClick={removeCartHandler}>
                                Remove from bag
                            </Button>
                        ) : (
                            <Button variant="dark" onClick={addToCartHandler}>
                                Add to bag
                            </Button>
                        )}
                        <Button variant="light">
                            Favorite
                        </Button>
                    </div>
                </div>
            </section>
        </Container>
    );
}
export default ProductPage;