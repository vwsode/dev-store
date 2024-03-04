import { FC } from 'react';
import { Container, Typography } from '@/components/shared/ui';

import s from './Categories.module.scss';
import CategoryItem from '@/components/CategoryItem/CategoryItem';

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
                            link={''}
                            title={'Nike soccer'}
                            preTitle={'Say It With Your Crest'}
                        />
                        <CategoryItem
                            image={
                                'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/b98affe1-03b1-488e-8b85-f70594235670/nike-just-do-it.jpg'
                            }
                            link={''}
                            title={'Air Force 1 Wild'}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Categories;
