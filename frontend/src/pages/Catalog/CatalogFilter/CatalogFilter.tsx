import { FC } from 'react';

import FilterGroup from '@/components/FilterGroup/FilterGroup';
import { Checkbox, Typography } from '@/components/shared/ui';

import s from './CatalogFilter.module.scss';

const CatalogFilter: FC = () => {
    return (
        <form className={s['wrapper']}>
            <FilterGroup
                className={s['filter']}
                title="Gender"
                selected={2}
                isOpen={false}
            >
                <Checkbox
                    className={s['filter-check']}
                    label={
                        <Typography bold variant="body1">
                            Men
                        </Typography>
                    }
                />
                <Checkbox
                    className={s['filter-check']}
                    label={
                        <Typography bold variant="body1">
                            Women
                        </Typography>
                    }
                />
                <Checkbox
                    className={s['filter-check']}
                    label={
                        <Typography bold variant="body1">
                            Gay
                        </Typography>
                    }
                />
            </FilterGroup>
            <FilterGroup
                className={s['filter']}
                title="Sport & Activites"
                selected={2}
                isOpen={false}
            >
                <Checkbox
                    className={s['filter-check']}
                    label={
                        <Typography bold variant="body1">
                            Football
                        </Typography>
                    }
                />
                <Checkbox
                    className={s['filter-check']}
                    label={
                        <Typography bold variant="body1">
                            Lifestyle
                        </Typography>
                    }
                />
                <Checkbox
                    className={s['filter-check']}
                    label={
                        <Typography bold variant="body1">
                            Baseball
                        </Typography>
                    }
                />
                <Checkbox
                    className={s['filter-check']}
                    label={
                        <Typography bold variant="body1">
                            Golf
                        </Typography>
                    }
                />
            </FilterGroup>
        </form>
    );
};

export default CatalogFilter;
