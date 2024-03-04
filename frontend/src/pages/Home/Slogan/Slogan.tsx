import { FC } from 'react';

import { Typography, Container, Button } from '@/components/shared/ui';

import s from './Sloga.module.scss';

type Props = {
    title?: string;
    preTitle?: string;
    description?: string;
};

const Slogan: FC<Props> = ({ title = '', preTitle = '', description = '' }) => {
    return (
        <section className={s['section']}>
            <Container size="sm">
                <div className={s['wrapper']}>
                    <div className={s['text']}>
                        <Typography bold variant="body2">
                            {preTitle}
                        </Typography>
                        <Typography bold variant="h2">
                            {title}
                        </Typography>
                        <Typography bold variant="body1">
                            {description}
                        </Typography>
                    </div>
                    <Button
                        className={s['link']}
                        asLink={true}
                        to="/catalog"
                        size="xs"
                        variant="dark"
                    >
                        Shop
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Slogan;
