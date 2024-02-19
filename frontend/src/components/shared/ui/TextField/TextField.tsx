import './TextField.scss';
import { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    hintText?: string;
    isError?: boolean;
}

const TextField = ({
    isError = false,
    hintText = '',
    ...props
}: TextFieldProps) => {
    return (
        <label className={`text-field ${isError ? 'text-field_error' : ''}`}>
            <input className="text-field__input" {...props} />
            {hintText && <span className="text-field__hint">{hintText}</span>}
        </label>
    );
};

export default TextField;
