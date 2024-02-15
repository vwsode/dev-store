import './ProductItem.scss';
import {NavLink} from "react-router-dom";

interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
    };
    images: string[];
}

const ProductItem = ({id, title, price, description, category, images}: ProductCardProps) => {
    return (
        <div className="product-card">
            <NavLink className="product-card__link-overlay" to={`${id}`}/>
            <img className="product-card__img"
                 src={images[0]}
                 alt=""/>
            <div className="product-card__info">
                <span className="product-card__messaging">Coming Soon</span>
                <div className="product-card__titles">
                    <h5 className="product-card__title">{title}</h5>
                    <h6 className="product-card__subtitle">{category.name}</h6>
                </div>
                <span className="product-card__count">1 Color</span>
                <span className="product-card__price">${price}</span>
            </div>
        </div>
    )
};

export default ProductItem;