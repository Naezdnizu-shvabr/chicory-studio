import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieBackscreen from "../../widgets/movieModal/MovieBackscreen";
import homeHeaderImg from "../../assets/img/home-header-img.png";
import { DataContext } from "../../context/Contex";
import { animeServices } from "../../servises/animeServices";
import { getRandomNum } from "../../helpers/helpers";
import SliderBlock from "../../widgets/sliderBlock/SliderBlock";

const HomePage = () => {
    const animeContext = useContext(DataContext);
    const [randomIndex, setRandomIndex] = useState(0);
    const [homeImage, setHomeImage] = useState(homeHeaderImg);

    useEffect(() => {
        setRandomIndex(getRandomNum(0, animeContext.bestRetedAnime.length));
    }, [animeContext.bestRetedAnime]);

    useEffect(() => {
        animeServices.getTopAnime(animeContext.bestRetedAnime, setHomeImage, randomIndex);
    }, [animeContext.bestRetedAnime, randomIndex]);

    const sliderData = [
        { title: "Scheduled", data: animeContext.scheduledAnime },
        { title: "Recomended", data: animeContext.topRecomended },
        { title: "Best rated", data: animeContext.bestRetedAnime },
        { title: "New", data: animeContext.fallAnimeSeasons },
    ];

    return (
        <DefaultLayout>
            <div className="home">
                <div className="home__header">
                    <img
                        className="home__header-img"
                        src={homeImage}
                        alt="home-header-img"
                    />
                    <div className="home__header-blur"></div>
                    <Header />
                    <MovieBackscreen
                        bestRetedAnime={animeContext.bestRetedAnime}
                        index={randomIndex}
                    />
                </div>

                {sliderData.map((item, index) => (
                    <SliderBlock
                        key={index}
                        title={item.title}
                        topRecomended={
                            item.data === animeContext.topRecomended ? item.data : null
                        }
                        bestRetedAnime={
                            item.data !== animeContext.topRecomended ? item.data : null
                        }
                    />
                ))}
            </div>
        </DefaultLayout>
    );
};

export default HomePage;
