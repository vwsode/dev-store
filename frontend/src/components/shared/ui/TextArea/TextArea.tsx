import { FC, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    hintText?: string;
}

const TextArea: FC<Props> = ({ hintText = '', ...props }) => {
    return (
        <label className={styles['label']}>
            <textarea className={styles['text-area']} {...props}></textarea>
            {hintText && <span className={styles['hint']}>{hintText}</span>}
        </label>
    );
};

export default TextArea;
