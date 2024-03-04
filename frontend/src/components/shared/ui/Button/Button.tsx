import { ButtonHTMLAttributes, ReactNode } from 'react';

import './Button.scss';
import { NavLink } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'dark' | 'light' | 'cta' | 'flat';
    rounded?: boolean;
    size?: 'xs' | 'md' | 'lg';
    asLink?: boolean;
    to?: string;
}

const Button = ({
    variant,
    children,
    className,
    asLink = false,
    to = '',
    size = 'md',
    rounded = true,
    ...props
}: ButtonProps) => {
    const cn = `btn btn-${size} btn-${variant} ${!rounded ? 'btn-not-rounded' : ''} ${className}`;

    if (asLink) {
        return (
            <NavLink className={cn} to={to}>
                {children}
            </NavLink>
        );
    }

    return (
        <button className={cn} {...props}>
            {children}
        </button>
    );
};

export default Button;
