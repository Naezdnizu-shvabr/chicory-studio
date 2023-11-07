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
import ReactPlayer from "react-player";

const MovieSlider = ({ anime, isVideoPlaying, setIsVideoPlaying }) => {
    const { slidesPerView } = useWindowResize();
    const images = [image1, image2, image3, image4];
    const handlePlayVideo = () => {
        setIsVideoPlaying((prev) => !prev);
        console.log(isVideoPlaying);
    };
    return (
        <div className="movie-slider">
            <h2 className="movie-slider__title">{anime.title}</h2>
            <Swiper
                modules={[A11y]}
                className="movie-swiper slider"
                spaceBetween={20}
                slidesPerView={slidesPerView}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Fancybox>
                            <a data-fancybox="gallery" href={image}>
                                {index === 0 ? (
                                    <ReactPlayer
                                        url={
                                            anime.trailer.embed_url ||
                                            "https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                        }
                                        playing={isVideoPlaying}
                                        width={317}
                                        height={182}
                                        volume={0.05}
                                        controls={true}
                                        onClick={handlePlayVideo}
                                    />
                                ) : (
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                )}
                            </a>
                        </Fancybox>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieSlider;
