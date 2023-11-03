import React, { useEffect, useState } from 'react';
import { swiperConfig } from '../../entities/slider/config/swiperConfig';
import CardRecomended from '../../shared/cardRecomended/CardRecomended';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import CardRecomendedImg from '../../shared/cardRecomended/ui/CardRecomendedImg';

const SliderRecomended = ({topRecomended}) => {
    const [slidesPerView, setSlidesPerView] = useState(3.1);
    const handleResize = () => {
        const newWidth = window.innerWidth;
        swiperConfig.getSwiperSlideConfig(newWidth, setSlidesPerView);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    console.log(topRecomended);
    return (
        <>
        <Swiper
            modules={[A11y]}
            className="main-swiper slider-recomended"
            spaceBetween={20}
            slidesPerView={slidesPerView}>
            {topRecomended && topRecomended.length > 0
                ? topRecomended.map((anime) => (
                      <SwiperSlide key={anime.mal_id}>
                          <CardRecomended topRecomended={anime} />
                          
                      </SwiperSlide>
                  ))
                : null}
        </Swiper>
        </>
        
    );
}

export default SliderRecomended;
