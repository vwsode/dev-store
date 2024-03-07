import { useState } from 'react';
import cn from 'classnames';
import {
    Container,
    Button,
    Typography,
    Dropdown,
} from '@/components/shared/ui';

import SettingsIcon from '@/assets/icons/settings.svg?react';
import ChevronIcon from '@/assets/icons/chevron.svg?react';

import s from './CatalogControls.module.scss';

type DropdownItem = {
    title: string;
    value: string;
};

const sortItems: DropdownItem[] = [
    {
        title: 'Featured',
        value: 'featured',
    },
    {
        title: 'Newest',
        value: 'newest',
    },
    {
        title: 'Price: High-Low',
        value: 'priceDesc',
    },
    {
        title: 'Price: Low-High',
        value: 'priceAsc',
    },
];

const CatalogControls = () => {
    const [isSortDropdownOpen, setIsSortDropdownOpen] =
        useState<boolean>(false);
    const [sortValue, setSortValue] = useState<DropdownItem | null>(null);

    const handleDropdownOpen = () => {
        setIsSortDropdownOpen(!isSortDropdownOpen);
    };

    const handleDropdownChange = (newValue: DropdownItem) => {
        setSortValue(newValue);
        setIsSortDropdownOpen(false);
    };

    return (
        <Container size="md">
            <div className={s['wrapper']}>
                <Typography variant="h4">Mens shoes</Typography>
                <div className={s['controls']}>
                    <Button variant="flat">
                        Show Filters
                        <SettingsIcon />
                    </Button>
                    <div className={s['sort']}>
                        <Button
                            onClick={handleDropdownOpen}
                            variant="flat"
                            className={cn(s['sort'], {
                                [s['active']]: isSortDropdownOpen,
                            })}
                        >
                            Sort By
                            {sortValue && (
                                <>
                                    :
                                    <Typography
                                        bold
                                        className={s['sort-value']}
                                        variant="body1"
                                    >
                                        {sortValue.title}
                                    </Typography>
                                </>
                            )}
                            <ChevronIcon />
                        </Button>
                        <Dropdown
                            isOpen={isSortDropdownOpen}
                            onChange={handleDropdownChange}
                            className={s['sort-dropdown']}
                            items={sortItems}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CatalogControls;
