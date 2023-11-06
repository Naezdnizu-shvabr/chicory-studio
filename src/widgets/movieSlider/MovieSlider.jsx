import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import useWindowResize from "../../hooks/useWindowResize";

import image1 from "../../assets/img/imgSlider/img_1.png";
import image2 from "../../assets/img/imgSlider/img_2.png";
import image3 from "../../assets/img/imgSlider/img_3.png";
import image4 from "../../assets/img/imgSlider/img_4.png";

import Fancybox from "../../features/fancyBox/FancyBox";

const MovieSlider = ({ title }) => {
    const { slidesPerView } = useWindowResize();
    const images = [image1, image2, image3, image4];

    return (
        <div className="movie-slider">
            <h2 className="movie-slider__title">{title}</h2>
            <Swiper
                modules={[A11y]}
                className="movie-swiper slider"
                spaceBetween={20}
                slidesPerView={slidesPerView}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Fancybox>
                            <a data-fancybox="gallery" href={image}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </a>
                        </Fancybox>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieSlider;
