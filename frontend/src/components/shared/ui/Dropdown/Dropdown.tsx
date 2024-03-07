import { FC, useEffect, useRef } from 'react';

import { Typography } from '@components/shared/ui';

import s from './Dropdown.module.scss';

type ListItem = {
    value: string;
    title: string;
};

type Props = {
    items: ListItem[];
    className?: string;
    onChange: (selectedValue: ListItem) => void;
    isOpen: boolean;
    // setIsOpen    
};

const Dropdown: FC<Props> = ({ items, className, onChange, isOpen }) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent): void => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                // ...
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    if (!isOpen) return <></>;

    const handleItemClick = (item: ListItem) => {
        onChange(item);
    };

    return (
        <div className={`${s['dropdown']} ${className}`} ref={dropdownRef}>
            <ul className={s['list']}>
                {items.map((item) => (
                    <li
                        className={s['item']}
                        key={item.value}
                        onClick={() => handleItemClick(item)}
                    >
                        <Typography bold variant="body1">
                            {item.title}
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
