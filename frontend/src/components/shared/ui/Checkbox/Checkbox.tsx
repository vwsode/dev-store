import { InputHTMLAttributes } from 'react';

import s from './Checkbox.module.scss';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Checkbox = ({ label, ...props }: ICheckbox) => {
    return (
        <label className={s['label']}>
            <span className={s['icon']}>
                <input className={s['input']} type="checkbox" {...props} />
            </span>
            <span className={s['text']}>{label}</span>
        </label>
    );
};

export default Checkbox;
