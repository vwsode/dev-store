import './TextField.scss';
import {InputHTMLAttributes} from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
}

const TextField = ({...props}: TextFieldProps) => {
    return (
        <label className="text-field">
            <input className="text-field__input" {...props}/>
        </label>
    )
};

export default TextField;