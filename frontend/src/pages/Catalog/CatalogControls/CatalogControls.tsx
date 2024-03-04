import { Container, Button } from '@/components/shared/ui';

import SettingsIcon from '@/assets/icons/settings.svg?react';
import ChevronIcon from '@/assets/icons/chevron.svg?react';

import s from './CatalogControls.module.scss';

const CatalogControls = () => {
    return (
        <Container size="md">
            <div className={s['controls']}>
                <Button variant="flat">
                    Show Filters
                    <SettingsIcon />
                </Button>
                <Button variant="flat" className={s['sort']}>
                    Sort by
                    <ChevronIcon />
                </Button>
            </div>
        </Container>
    );
};

export default CatalogControls;
