import React, { useContext } from "react";
import SliderBlock from "../../features/sliderBlock/SliderBlock";
import { DataContext } from "../../context/Contex";

const SliderBlocksContainer = () => {
    const animeContext = useContext(DataContext);

    const sliderData = [
        { id: 0, title: "Scheduled", data: animeContext.scheduledAnime },
        { id: 1, title: "Recomended", data: animeContext.topRecomended },
        { id: 2, title: "Best rated", data: animeContext.bestRetedAnime },
        { id: 3, title: "New", data: animeContext.fallAnimeSeasons },
    ];
    return sliderData.map((item) => (
        <SliderBlock
            key={item.id}
            title={item.title}
            topRecomended={item.data === animeContext.topRecomended ? item.data : null}
            anime={item.data !== animeContext.topRecomended ? item.data : null}
        />
    ));
};

export default SliderBlocksContainer;
