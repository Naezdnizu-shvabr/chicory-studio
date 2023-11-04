import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import CardRecomended from "../../shared/cardRecomended/CardRecomended";
import useWindowResize from "../../hooks/useWindowResize";
import { Skeleton } from "@mui/material";
import Card from "../../shared/card/Card";
import SliderTitle from "../../shared/slider/SliderTitle";

const Slider = ({ anime, topRecomended, title }) => {
    const { slidesPerView } = useWindowResize();
    const swiperRef = useRef(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const goToFirstSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(0, 1000, false);
            setSliderPosition(0);
        }
    };
    const handleSlideChange = (swiper) => {
        setSliderPosition(swiper.realIndex);
    console.log(sliderPosition)

    };
    useEffect(() => {
        (anime && anime.length > 0) || (topRecomended && topRecomended.length > 0)
            ? setDataLoaded(true)
            : setDataLoaded(false);
        if (swiperRef.current) {
            setSliderPosition(swiperRef.current.swiper.realIndex);
        }
    }, [anime, topRecomended]);

    const skeletonSlides = Array.from({ length: slidesPerView }).map((_, index) => (
        <SwiperSlide key={index}>
            <Skeleton variant="rounded" animation={"wave"} width={350} height={205} />
        </SwiperSlide>
    ));
    return (
        <>
            <SliderTitle
                title={title}
                goToFirstSlide={goToFirstSlide}
                sliderPosition={sliderPosition}
            />
            <Swiper
                ref={swiperRef}
                modules={[A11y]}
                className="main-swiper slider"
                spaceBetween={20}
                slidesPerView={slidesPerView}
                onSlideChange={handleSlideChange}
                
                >
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
