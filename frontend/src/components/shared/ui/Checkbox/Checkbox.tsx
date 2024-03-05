import { InputHTMLAttributes, ReactNode } from 'react';

import s from './Checkbox.module.scss';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    label: string | ReactNode;
}

const Checkbox = ({ label, className, ...props }: ICheckbox) => {
    return (
        <label className={`${s['label']} ${className}`}>
            <span className={s['icon']}>
                <input className={s['input']} type="checkbox" {...props} />
            </span>
            {typeof label === 'string' ? (
                <span className={s['text']}>{label}</span>
            ) : (
                <>{label}</>
            )}
        </label>
    );
};

export default Checkbox;
