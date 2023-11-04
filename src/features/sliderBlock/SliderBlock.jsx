import React from "react";
import Slider from "../slider/Slider";

const SliderBlock = ({ anime, title, topRecomended }) => {
    
    return (
        <div className="slider-block">
            {anime ? (
                <Slider
                    anime={anime}
                    title={title}
                />
            ) : null}
            {topRecomended ? (
                <Slider
                    topRecomended={topRecomended}
                    title={title}
                />
            ) : null}
        </div>
    );
};

export default SliderBlock;
