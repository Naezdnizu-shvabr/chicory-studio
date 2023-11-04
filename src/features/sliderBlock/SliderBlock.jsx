import React, { useRef } from "react";
import Slider from "../slider/Slider";

const SliderBlock = ({ anime, title, topRecomended }) => {
    const swiperRef = useRef(null);
    const goToFirstSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(0, 1000, false);
        }
    };
    return (
        <div className="slider-block">
            {anime ? (
                <Slider
                    anime={anime}
                    swiperRef={swiperRef}
                    goToFirstSlide={goToFirstSlide}
                    title={title}
                />
            ) : null}
            {topRecomended ? (
                <Slider
                    topRecomended={topRecomended}
                    swiperRef={swiperRef}
                    goToFirstSlide={goToFirstSlide}
                    title={title}
                />
            ) : null}
        </div>
    );
};

export default SliderBlock;
