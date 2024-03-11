import { FC } from 'react';

import { Container, Typography } from '@/components/shared/ui';
import CategoryItem from '@/components/CategoryItem/CategoryItem';

import { ROUTES } from '@/config/routes';

import s from './Categories.module.scss';

type Props = {
    categories: [];
    title?: string;
};

const Categories: FC<Props> = ({ categories, title = '' }) => {
    console.log(categories);

    return (
        <section className={s['section']}>
            <Container size="md">
                <div className={s['wrapper']}>
                    <Typography variant="h5">{title}</Typography>
                    <div className={s['items']}>
                        <CategoryItem
                            image={
                                'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/4dd9a7fb-0871-4009-9fb7-0a530bc91de5/nike-just-do-it.jpg'
                            }
                            link={`${ROUTES.CATALOG}/women`}
                            title="Shoes for Women"
                            preTitle="The Best of Nike"
                        />
                        <CategoryItem
                            image={
                                'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/b98affe1-03b1-488e-8b85-f70594235670/nike-just-do-it.jpg'
                            }
                            link={`${ROUTES.CATALOG}/men`}
                            preTitle="The Best of Nike"
                            title="Shoes for Men"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Categories;
