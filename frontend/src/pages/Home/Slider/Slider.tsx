import { FC, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import { Container, Typography } from '@/components/shared/ui';

import SliderItem from '@/components/SliderItem/SliderItem';

import Chevron from '@/assets/icons/chevron.svg?react';
import s from './Slider.module.scss';

type Props = {
    items?: [];
};

const Slider: FC<Props> = () => {
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
                        <SwiperSlide>
                            <SliderItem
                                title="Nike Dunk Low Retro"
                                category="Men's Shoes"
                                image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/eba7a509-73b5-473f-a964-6bea77d8ebf1/dunk-low-retro-mens-shoes-76KnBL.png"
                                link="/catalog/"
                                price={100}
                                salePrice={250}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SliderItem
                                title="Nike Dunk Low Retro"
                                category="Men's Shoes"
                                image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/eba7a509-73b5-473f-a964-6bea77d8ebf1/dunk-low-retro-mens-shoes-76KnBL.png"
                                link="/catalog/"
                                price={100}
                                salePrice={250}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SliderItem
                                title="Nike Dunk Low Retro"
                                category="Men's Shoes"
                                image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/eba7a509-73b5-473f-a964-6bea77d8ebf1/dunk-low-retro-mens-shoes-76KnBL.png"
                                link="/catalog/"
                                price={100}
                                salePrice={250}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SliderItem
                                title="Nike Dunk Low Retro"
                                category="Men's Shoes"
                                image="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/eba7a509-73b5-473f-a964-6bea77d8ebf1/dunk-low-retro-mens-shoes-76KnBL.png"
                                link="/catalog/"
                                price={100}
                                salePrice={250}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default Slider;
