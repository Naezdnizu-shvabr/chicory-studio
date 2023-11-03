import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import { swiperConfig } from "../../entities/slider/config/swiperConfig";
import CardRecomended from "../../shared/cardRecomended/CardRecomended";
import CardPopular from "../../shared/cardPopular/CardPopular";
const Slider = ({ topAnime, topRecomended }) => {
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
        <Swiper
            modules={[A11y]}
            className="main-swiper slider"
            spaceBetween={20}
            slidesPerView={slidesPerView}>
            {topAnime && topAnime.length > 0
                ? topAnime.map((anime) => (
                      <SwiperSlide key={anime.mal_id}>
                          <CardPopular topAnime={anime} />
                      </SwiperSlide>
                  ))
                : null}
            {topRecomended && topRecomended.length > 0
                ? topRecomended.map((anime) => (
                      <SwiperSlide key={anime.mal_id}>
                          <CardRecomended topRecomended={anime} />
                      </SwiperSlide>
                  ))
                : null}
        </Swiper>
    );
};

export default Slider;
