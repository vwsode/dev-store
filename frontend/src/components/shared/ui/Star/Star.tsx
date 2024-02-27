import { HTMLAttributes } from 'react';
import styles from './Star.module.scss';

interface Props extends HTMLAttributes<HTMLSpanElement> {
    variant: 'filled' | 'default';
    size: 'sm' | 'md' | 'lg';
}

const Star = ({ variant, size, ...props }: Props) => {
    const className = `${styles['star']} ${styles[`star-${variant}`]} ${styles[`star-${size}`]}`;

    return <span className={className} {...props}></span>;
};

export default Star;
