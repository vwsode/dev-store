import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';
import { Typography } from '../shared/ui';

import Chevron from '@assets/icons/chevron.svg?react';
import s from './FilterGroup.module.scss';

type Props = {
    children: ReactNode;
    title: string;
    selected?: number;
    isOpen: boolean;
    className?: string;
};

const FilterGroup: FC<Props> = ({
    children,
    title,
    selected,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={cn(`${s['group']} ${className}`, {
                [s['active']]: isOpen,
            })}
            aria-expanded={isOpen}
        >
            <div className={s['top']} onClick={toggleHandler}>
                <Typography variant="body1" bold>
                    {title}
                    {selected && ` (${selected})`}
                </Typography>
                <i className={s['toggle']}>
                    <Chevron />
                </i>
            </div>
            <div
                style={{ height: isOpen ? 'auto' : 0 }}
                className={s['content-wrap']}
            >
                <div className={s['content']}>{children}</div>
            </div>
        </div>
    );
};

export default FilterGroup;
