import { FC, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import { Container, Typography } from '@/components/shared/ui';
import SliderItem from '@/components/SliderItem/SliderItem';

import useProducts from '@/hooks/useProducts';

import Chevron from '@/assets/icons/chevron.svg?react';
import s from './Slider.module.scss';

type Props = {
    items?: [];
};

const Slider: FC<Props> = () => {
    const { products } = useProducts();

    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <section>
            <Container>
                <div className={s['wrapper']}>
                    <div className={s['top']}>
                        <Typography variant="h5">Popular Right Now</Typography>
                        <div className={s['slider-controls']}>
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className={s['slider-prev']}
                            >
                                <Chevron />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className={s['slider-next']}
                            >
                                <Chevron />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        className={s['slider']}
                        slidesPerView={3}
                        navigation
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={20}
                    >
                        {products.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SliderItem
                                    title={item.product.name}
                                    category={item.product.category}
                                    image={item.mainImage}
                                    link={'/catalog/' + item.id}
                                    price={item.price}
                                    newPrice={item.newPrice}
                                    isSale={item.isSale}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default Slider;
