import { useEffect, useState } from "react";
import { swiperConfig } from "../entities/slider/config/swiperConfig";
// import {swiperConfig} from "../entities/slider/config/swiperConfig";

const useWindowResize = () => {
    const [slidesPerView, setSlidesPerView] = useState(3.1);
    const [isFullWidth, setIsFullWidth] = useState(false);

    const handleResize = () => {
        const newWidth = window.innerWidth;
        setSlidesPerView(swiperConfig.getSwiperSlideConfig(newWidth,setSlidesPerView));
        setIsFullWidth(newWidth <= 885);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { slidesPerView, isFullWidth };
};

export default useWindowResize;
