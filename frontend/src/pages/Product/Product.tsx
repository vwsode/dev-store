import Container from "../../components/Container/Container.tsx";
import Button from "../../components/Button/Button.tsx";

import './Product.scss';
import {useParams} from "react-router";
import useProducts from "../../hooks/useProducts.ts";
import {useEffect} from "react";
import useCart from "../../hooks/useCart.ts";

const Product = () => {
    const {id} = useParams();
    const {product, setProduct} = useProducts();
    const {cart, addItemToCart, removeItemFormCart, loading} = useCart();

    useEffect(() => {
        if (id)
            setProduct(Number(id));
    }, []);


    const addToCartHandler = () => {
        addItemToCart(product);
    }

    const removeCartHandler = () => {
        removeItemFormCart(Number(id));
    }

    const isItemInCart = cart.some((item) => item.id === id);

    return (
        <Container size="sm">
            <section className="product">
                <div className="product__images">
                    {loading ? 'Loading' : 'Loaded '}

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
                    <p className="product__description">{product.description}</p>

                </div>
            </section>
        </Container>
    );
}
export default Product;