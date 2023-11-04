import React, { useRef } from "react";
import Slider from "../../features/slider/Slider";
import { FaArrowRotateLeft } from "react-icons/fa6";

const SliderBlock = ({ topAnime, title, topRecomended }) => {
    const swiperRef = useRef(null);
    const goToFirstSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(0, 1000, false);
        }
    };
    return (
        <div className="slider-block">
            <div className="slider-block__title">
                <h2 className="slider-block-title">{title}</h2>
                <FaArrowRotateLeft onClick={goToFirstSlide} />
            </div>
            {topAnime ? <Slider topAnime={topAnime} swiperRef={swiperRef} /> : null}
            {topRecomended ? (
                <Slider topRecomended={topRecomended} swiperRef={swiperRef} />
            ) : null}
        </div>
    );
};

export default SliderBlock;
