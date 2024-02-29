import { useRef, useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import useProduct from '@/hooks/useProduct';

import Chevron from '@/assets/icons/chevron.svg?react';
import s from './ProductImagesSlider.module.scss';

const ProductImagesSlider = () => {
    const { product } = useProduct();
    const [thumbs, setThumbs] = useState<SwiperClass | null>(null);
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <div className={s['sliders']}>
            <Swiper
                direction="vertical"
                className={s['thumbs']}
                slidesPerView={9}
                spaceBetween={10}
                onSwiper={setThumbs}
                loop={true}
            >
                {product.images.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            className={s['thumbs-img']}
                            src={item.image}
                            alt={item.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={s['slider-wrapper']}>
                <div className={s['slider-actions']}>
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={s['slider-action-prev']}
                    >
                        <Chevron />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={s['slider-action-next']}
                    >
                        <Chevron />
                    </button>
                </div>
                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className={s['slider']}
                    thumbs={{ swiper: thumbs }}
                    loop={true}
                    modules={[Navigation, Thumbs]}
                    navigation
                >
                    {product.images.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                className={s['slider-img']}
                                src={item.image}
                                alt={item.alt}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductImagesSlider;
