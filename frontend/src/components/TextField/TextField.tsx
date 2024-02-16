import './TextField.scss';
import {InputHTMLAttributes} from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    hint?: string;
    isError?: boolean;
}

const TextField = ({isError = false, hint = '', ...props}: TextFieldProps) => {
    return (
        <label className={`text-field ${isError ? 'text-field_error' : ''}`}>
            <input className="text-field__input" {...props}/>
            {hint && <span className="text-field__hint">{hint}</span>}
        </label>
    )
};

export default TextField;