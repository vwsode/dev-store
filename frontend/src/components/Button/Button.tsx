import {ButtonHTMLAttributes, ReactNode} from "react";

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: "dark" | "light";
    rounded?: boolean;

}


const Button = ({variant, children, rounded = true, ...props}: ButtonProps) => {
    return (
        <button className={`btn btn-${variant} ${!rounded ? 'btn-not-rounded' : ''}`} {...props}>{children}</button>
    )
};

export default Button;