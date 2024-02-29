import React, { FC, ReactNode } from 'react';

import s from './Typography.module.scss';

type Props = {
    variant:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption';
    bold?: boolean;
    className?: string;
    children: ReactNode;
};

const Typography: FC<Props> = ({
    children,
    variant,
    bold = false,
    className = '',
}) => {
    const Tag = variant.startsWith('h') ? variant : 'p';

    return (
        <Tag
            className={`${s['typography']} ${s[`typography-${variant}`]} ${bold ? s['typography-bold'] : ''} ${className}`}
        >
            {children}
        </Tag>
    );
};

export default Typography;
