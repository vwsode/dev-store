import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Modal.module.scss';

import CloseIcon from '../../../../assets/icons/close.svg?react';

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
}

const Modal = ({ children, onClose, isOpen = false }: Props) => {
    if (!isOpen) {
        return;
    }

    return (
        <div
            className={cn(styles['modal'], {
                [`${styles['modal-open']}`]: isOpen,
            })}
        >
            <div onClick={onClose} className={styles['mask']}></div>
            <div className={styles['content']}>
                <button onClick={onClose} className={styles['btn-close']}>
                    <CloseIcon />
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.Footer = ({ children }: { children: ReactNode }) => {
    return children;
};

Modal.Header = ({ children }: { children: ReactNode }) => {
    return <div className={styles['modal-header']}>{children}</div>;
};

Modal.Body = ({ children }: { children: ReactNode }) => {
    return <div className={styles['modal-body']}>{children}</div>;
};

export default Modal;
