import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useProducts from '../../hooks/useProducts.ts';
import useCart from '../../hooks/useCart.ts';

import Container from '../../components/shared/ui/Container/Container.tsx';
import Button from '../../components/shared/ui/Button/Button.tsx';
import SizeSelect from '../../components/product/SizeSelect/SizeSelect.tsx';
import { ReviewsList } from '../../components/reviews';

import './Product.scss';

const Product = () => {
    const { id } = useParams();
    const { product, setProduct } = useProducts();
    const { cart, addItemToCart, removeItemFormCart } = useCart();

    useEffect(() => {
        if (id) setProduct(Number(id));
    }, [id]);

    const addToCartHandler = () => {
        addItemToCart(product);
    };

    const removeFromCartHandler = () => {
        removeItemFormCart(Number(id));
    };

    const isItemInCart = cart.some((item) => item.id === Number(id));

    return (
        <Container size="sm">
            <section className="product">
                <div className="product__images">
                    {product.images.map(({ image, alt }) => (
                        <img key={image} src={image} alt={alt} />
                    ))}
                </div>
                <div className="product__info">
                    <div className="product__titles">
                        <h1 className="product__title">{product.name}</h1>
                        <span className="product__subtitle">
                            {product.category}
                        </span>
                    </div>
                    <div className="product__text">
                        <span className="product__price">${product.price}</span>
                        {!!product.sale_price && (
                            <span className="product__sale-price">
                                ${product.sale_price}
                            </span>
                        )}
                    </div>
                    <SizeSelect sizes={product.size} name="size" />
                    <div className="product__actions">
                        <Button
                            variant="dark"
                            onClick={
                                isItemInCart
                                    ? removeFromCartHandler
                                    : addToCartHandler
                            }
                        >
                            {isItemInCart ? 'Remove from bag' : 'Add to bag'}
                        </Button>
                        <Button variant="light">Favorite</Button>
                    </div>
                    <p className="product__description">
                        {product.description}
                    </p>

                    <ReviewsList
                        productName={product.name}
                        reviews={product.reviews}
                        totalRating={3}
                    />
                </div>
            </section>
        </Container>
    );
};

export default Product;
