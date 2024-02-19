import { ButtonHTMLAttributes, ReactNode } from 'react';

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'dark' | 'light' | 'cta';
    rounded?: boolean;
}

const Button = ({
    variant,
    children,
    rounded = true,
    className,
    ...props
}: ButtonProps) => {
    const cn = `btn btn-${variant} ${!rounded ? 'btn-not-rounded' : ''} ${className}`;

    return (
        <button className={cn} {...props}>
            {children}
        </button>
    );
};

export default Button;
