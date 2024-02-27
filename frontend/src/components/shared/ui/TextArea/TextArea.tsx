import { FC, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    hintText?: string;
    isError?: boolean;
}

const TextArea: FC<Props> = ({ hintText = '', isError = false, ...props }) => {
    return (
        <label
            className={`${styles['label']} ${isError ? styles[`label_error`] : ''}`}
        >
            <textarea className={styles['text-area']} {...props}></textarea>
            {hintText && <span className={styles['hint']}>{hintText}</span>}
        </label>
    );
};

export default TextArea;
