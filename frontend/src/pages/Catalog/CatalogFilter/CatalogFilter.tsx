import { Checkbox } from '@/components/shared/ui';
import s from './CatalogFilter.module.scss';

const CatalogFilter = () => {
    return (
        <div className={s['wrapper']}>
            <Checkbox label="Men" />
            <Checkbox label="Women" />
            <Checkbox label="Gay" />
        </div>
    );
};

export default CatalogFilter;
