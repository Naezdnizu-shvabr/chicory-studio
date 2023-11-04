import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import CardRecomended from "../../shared/cardRecomended/CardRecomended";
import CardPopular from "../../shared/cardPopular/CardPopular";
import useWindowResize from "../../hooks/useWindowResize";
import { Skeleton } from "@mui/material";

const Slider = ({ bestRetedAnime, topRecomended, swiperRef }) => {
    const { slidesPerView } = useWindowResize();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        (bestRetedAnime && bestRetedAnime.length > 0) || (topRecomended && topRecomended.length > 0)
            ? setDataLoaded(true)
            : setDataLoaded(false);
    }, [bestRetedAnime, topRecomended]);

    const skeletonSlides = Array.from({ length: slidesPerView }).map((_, index) => (
        <SwiperSlide key={index}>
            <Skeleton variant="rounded" animation={"wave"} width={350} height={205} />
        </SwiperSlide>
    ));
    return (
        <Swiper
            ref={swiperRef}
            modules={[A11y]}
            className="main-swiper slider"
            spaceBetween={20}
            slidesPerView={slidesPerView}>
            {dataLoaded
                ? bestRetedAnime && bestRetedAnime.length > 0
                    ? bestRetedAnime.map((anime, index) => (
                          <SwiperSlide key={index}>
                              <CardPopular bestRetedAnime={anime} />
                          </SwiperSlide>
                      ))
                    : topRecomended.map((anime, index) => (
                          <SwiperSlide key={index}>
                              <CardRecomended topRecomended={anime} />
                          </SwiperSlide>
                      ))
                : skeletonSlides}
        </Swiper>
    );
};

export default Slider;
