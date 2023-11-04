import React, { useRef } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Slider from "../../features/slider/Slider";
const SliderBlock = ({ bestRetedAnime, title, topRecomended }) => {
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
            {bestRetedAnime ? <Slider bestRetedAnime={bestRetedAnime} swiperRef={swiperRef} /> : null}
            {topRecomended ? (
                <Slider topRecomended={topRecomended} swiperRef={swiperRef} />
            ) : null}
        </div>
    );
};

export default SliderBlock;
