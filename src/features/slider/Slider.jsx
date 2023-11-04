import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import CardRecomended from "../../shared/cardRecomended/CardRecomended";
import useWindowResize from "../../hooks/useWindowResize";
import { Skeleton } from "@mui/material";
import Card from "../../shared/card/Card";
import SliderTitle from "../../shared/slider/SliderTitle";

const Slider = ({ anime, topRecomended, swiperRef, title, goToFirstSlide }) => {
    const { slidesPerView } = useWindowResize();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        (anime && anime.length > 0) ||
        (topRecomended && topRecomended.length > 0)
            ? setDataLoaded(true)
            : setDataLoaded(false);
    }, [anime, topRecomended]);

    const skeletonSlides = Array.from({ length: slidesPerView }).map((_, index) => (
        <SwiperSlide key={index}>
            <Skeleton variant="rounded" animation={"wave"} width={350} height={205} />
        </SwiperSlide>
    ));
    return (
        <>
            <SliderTitle title={title} goToFirstSlide={goToFirstSlide} />
            <Swiper
                ref={swiperRef}
                modules={[A11y]}
                className="main-swiper slider"
                spaceBetween={20}
                slidesPerView={slidesPerView}>
                {dataLoaded
                    ? anime && anime.length > 0
                        ? anime.map((anime, index) => (
                              <SwiperSlide key={index}>
                                  <Card anime={anime} />
                              </SwiperSlide>
                          ))
                        : topRecomended.map((anime, index) => (
                              <SwiperSlide key={index}>
                                  <CardRecomended topRecomended={anime} />
                              </SwiperSlide>
                          ))
                    : skeletonSlides}
            </Swiper>
        </>
    );
};

export default Slider;
