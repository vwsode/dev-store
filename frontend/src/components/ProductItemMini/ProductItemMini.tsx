import { NavLink } from 'react-router-dom';
import { Typography } from '@components/shared/ui';

import styles from './ProductItemMini.module.scss';

interface Props {
    image: string;
    title: string;
    link: string;
    description?: string;
}

const ProductItemMini = ({ image, title, link, description = '' }: Props) => {
    return (
        <NavLink className={styles['product']} to={link}>
            <img className={styles['img']} src={image} alt={title} />
            <span className={styles['text']}>
                <Typography variant="body1" className={styles['title']}>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    className={styles['description']}
                >
                    {description}
                </Typography>
            </span>
        </NavLink>
    );
};

export default ProductItemMini;
