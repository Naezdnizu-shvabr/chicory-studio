import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import Card from "../card/Card";
import { DataContext } from "../../context/Contex";
import { swiperConfig } from "./config/swiperConfig";
const Slider = () => {
    const [slidesPerView, setSlidesPerView] = useState(3.1);
    const topAnime = useContext(DataContext);
    const handleResize = () => {
        const newWidth = window.innerWidth;
        swiperConfig.getSwiperConfig(newWidth, setSlidesPerView);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <Swiper
            modules={[A11y]}
            className="main-swiper slider"
            spaceBetween={20}
            slidesPerView={slidesPerView}>
            {topAnime.data && topAnime.data.length > 0
                ? topAnime.data.slice(0, 19).map((anime) => (
                      <SwiperSlide key={anime.mal_id}>
                          <Card topAnime={anime} />
                      </SwiperSlide>
                  ))
                : null}
        </Swiper>
    );
};

export default Slider;
