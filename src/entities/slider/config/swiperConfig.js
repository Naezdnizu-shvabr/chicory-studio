const swiperConfig = {
    getSwiperSlideConfig: (newWidth, setSlidesPerView) => {
        if (newWidth <= 710) {
            setSlidesPerView(1.1);
        } else if (newWidth <= 730) {
            setSlidesPerView(1.2);
        } else if (newWidth <= 750) {
            setSlidesPerView(1.4);
        } else if (newWidth <= 800) {
            setSlidesPerView(1.8);
        } else if (newWidth <= 1050) {
            setSlidesPerView(2);
        } else if (newWidth <= 1279) {
            setSlidesPerView(2.5);
        } else {
            setSlidesPerView(3.1);
        }
    },
};

export { swiperConfig };
