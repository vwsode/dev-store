import { ChangeEvent, FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import s from './SizeSelect.module.scss';

interface Props {
    sizes: number[];
    name: string;
    onChange: (size: string) => void;
    currentSize: string | null;
    isError?: boolean;
    hint?: string;
}

const SizeSelect: FC<Props> = ({
    sizes,
    name,
    onChange,
    currentSize,
    isError = false,
    hint = '',
}) => {
    const handleChangeSize = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
    };

    return (
        <fieldset
            className={cn(s['fieldset'], {
                [s.error]: isError,
            })}
        >
            <legend className={s['legend']}>
                <span className={s['legend-title']}>Select Size</span>
                <NavLink className={s['legend-link']} to="/catalog">
                    Size Guide
                </NavLink>
            </legend>
            <div className={s['grid']}>
                {sizes.map((size) => (
                    <label className={s['field']} key={size}>
                        <input
                            className={s['field-input']}
                            onChange={handleChangeSize}
                            value={size}
                            name={name}
                            type="radio"
                            checked={size.toString() === currentSize}
                        />
                        <span className={s['field-text']}>{size}</span>
                    </label>
                ))}
            </div>
            {hint && <span className={s['hint']}>{hint}</span>}
        </fieldset>
    );
};

export default SizeSelect;
