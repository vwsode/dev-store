import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useProducts from "../../hooks/useProducts.ts";
import useCart from "../../hooks/useCart.ts";

import Container from "../../components/shared/ui/Container/Container.tsx";
import Button from "../../components/shared/ui/Button/Button.tsx";
import SizeSelect from "../../components/product/SizeSelect/SizeSelect.tsx";

import "./Product.scss";
import { Reviews } from "../../components/product";

const Product = () => {
  const { id } = useParams();
  const { product, setProduct } = useProducts();
  const { cart, addItemToCart, removeItemFormCart } = useCart();

  useEffect(() => {
    if (id) setProduct(Number(id));
  }, []);

  const addToCartHandler = () => {
    addItemToCart(product);
  };

  const removeCartHandler = () => {
    removeItemFormCart(Number(id));
  };

  const isItemInCart = cart.some((item) => item.id === Number(id));

  return (
    <Container size="sm">
      <section className="product">
        <div className="product__images">
          {product.images.map((img) => (
            <img key={img.image} src={img.image} alt={img.alt} />
          ))}
        </div>
        <div className="product__info">
          <div className="product__titles">
            <h1 className="product__title">{product.name}</h1>
            <span className="product__subtitle">{product.category}</span>
          </div>
          <div className="product__text">
            <span className="product__price">${product.price}</span>
            {!!product.sale_price && (
              <span className="product__sale-price">${product.sale_price}</span>
            )}
          </div>
          <SizeSelect sizes={product.size} name="size" />
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
            <Button variant="light">Favorite</Button>
          </div>
          <p className="product__description">{product.description}</p>
          <Reviews />
        </div>
      </section>
    </Container>
  );
};
export default Product;
