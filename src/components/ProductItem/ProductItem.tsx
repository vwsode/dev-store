import './ProductItem.scss';
import {NavLink} from "react-router-dom";

interface ProductCardProps {

}

const ProductItem = ({}: ProductCardProps) => {
    return (
        <div className="product-card">
            <NavLink className="product-card__link-overlay" to='/catalog/1' />
            <img className="product-card__img" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fe30fc4-2645-4d1e-b3f8-70da145e0f74/air-max-97-mens-shoes-LJmK45.png" alt="" />
            <div className="product-card__info">
                <span className="product-card__messaging">Coming Soon</span>
                <div className="product-card__titles">
                    <h5 className="product-card__title">Nike Air Max Dn</h5>
                    <h6 className="product-card__subtitle">Men's Shoes</h6>
                </div>
                <span className="product-card__count">1 Color</span>
                <span className="product-card__price">$160</span>
            </div>
        </div>
    )
};

export default ProductItem;