import { NavLink } from 'react-router-dom';

import styles from './ProductMini.module.scss';

interface Props {
    image: string;
    title: string;
    link: string;
    description?: string;
}

const ProductMini = ({ image, title, link, description = '' }: Props) => {
    return (
        <NavLink className={styles['product']} to={link}>
            <img className={styles['img']} src={image} alt={title} />
            <span className={styles['text']}>
                <span className={styles['title']}>{title}</span>
                <span className={styles['description']}>{description}</span>
            </span>
        </NavLink>
    );
};

export default ProductMini;
