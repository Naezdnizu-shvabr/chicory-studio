import React from "react";
import Slider from "../../features/slider/Slider";

const SliderBlock = ({ topAnime, title, topRecomended }) => {
    return (
        <div className="slider-block">
            <h2 className="slider-block__title">{title}</h2>
            {topAnime ? <Slider topAnime={topAnime} /> : null}
            {topRecomended ? <Slider topRecomended={topRecomended} /> : null}
        </div>
    );
};

export default SliderBlock;
