import { FC } from 'react';

import s from './Dropdown.module.scss';

type Props = {};

const Dropdown: FC<Props> = () => {
    return <div className={s['dropdown']}>Dropdown</div>;
};

export default Dropdown;
