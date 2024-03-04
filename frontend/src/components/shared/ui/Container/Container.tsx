import { ReactNode } from 'react';

import s from './Container.module.scss';

interface ContainerProps {
    children: ReactNode;
    size?: 'md' | 'sm';
}

const Container = ({ children, size = 'md' }: ContainerProps) => {
    return (
        <div className={`${s['container']} ${s[`container-${size}`]}`}>
            {children}
        </div>
    );
};

export default Container;
