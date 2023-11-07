import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import useWindowResize from "../../hooks/useWindowResize";

import Fancybox from "../../features/fancyBox/FancyBox";
import Player from "../../shared/player/Player";

const MovieSlider = ({ anime }) => {
    const { slidesPerView } = useWindowResize();
    const webpImages = anime.images.webp;
    const imageUrls = Object.values(webpImages).map((image) => image);

    return (
        <div className="movie-slider">
            <h2 className="movie-slider__title">{anime.title}</h2>
            <Swiper
                modules={[A11y]}
                className="movie-swiper slider"
                spaceBetween={20}
                slidesPerView={slidesPerView}>
                {imageUrls.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Fancybox>
                            <a data-fancybox="gallery" href={image}>
                                {index === 0 ? (
                                    <Player
                                        url={anime.trailer.embed_url}
                                        width={318}
                                        height={178}
                                    />
                                ) : (
                                    <img
                                        src={image}
                                        alt={anime.title}
                                        style={{
                                            width: "350px",
                                            height: "182px",
                                            objectFit: "cover",
                                        }}
                                    />
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
