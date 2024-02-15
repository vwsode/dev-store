import {InputHTMLAttributes} from 'react';

import * as S from './Checkbox.styles.ts';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Checkbox = ({label, ...props}: ICheckbox) => {
    return (
        <S.Label>
            <S.Icon>
                <S.Input type="checkbox" {...props}/>
            </S.Icon>
            <S.Text>{label}</S.Text>
        </S.Label>
    )
};

export default Checkbox;