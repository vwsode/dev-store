import {ButtonHTMLAttributes, ReactNode} from "react";

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: "dark" | "light";

}


const Button = ({variant, children, ...props}: ButtonProps) => {
    return (
        <button className={`btn btn-${variant}`} {...props}>{children}</button>
    )
};

export default Button;