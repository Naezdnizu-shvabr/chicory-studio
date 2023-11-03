import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import CardRecomended from "../../shared/cardRecomended/CardRecomended";
import CardPopular from "../../shared/cardPopular/CardPopular";
import useWindowResize from "../../hooks/useWindowResize";

const Slider = ({ topAnime, topRecomended }) => {
    const { slidesPerView } = useWindowResize();
    return (
        <Swiper
            modules={[A11y]}
            className="main-swiper slider"
            spaceBetween={20}
            slidesPerView={slidesPerView}>
            {topAnime && topAnime.length > 0
                ? topAnime.map((anime, index) => (
                      <SwiperSlide key={index}>
                          <CardPopular topAnime={anime} />
                      </SwiperSlide>
                  ))
                : null}
            {topRecomended && topRecomended.length > 0
                ? topRecomended.map((anime, index) => (
                      <SwiperSlide key={index}>
                          <CardRecomended topRecomended={anime} />
                      </SwiperSlide>
                  ))
                : null}
        </Swiper>
    );
};

export default Slider;
