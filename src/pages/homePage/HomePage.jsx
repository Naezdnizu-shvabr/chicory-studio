import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieBackscreen from "../../widgets/movieModal/MovieBackscreen";
import homeHeaderImg from "../../assets/img/home-header-img.png";
import { DataContext } from "../../context/Contex";
import { animeServices } from "../../servises/animeServices";
import SliderBlock from "../../widgets/sliderBlock/SliderBlock";

const HomePage = () => {
    const animeContext = useContext(DataContext);
    const [randomIndex, setRandomIndex] = useState(0);
    const [homeImage, setHomeImage] = useState(homeHeaderImg);
    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    useEffect(() => {
        setRandomIndex(getRandomNum(0, animeContext.topAnime.length));
    }, [animeContext.topAnime]);
    
    useEffect(() => {
        animeServices.getTopAnime(animeContext.topAnime, setHomeImage, randomIndex);
    }, [animeContext.topAnime, randomIndex]);

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
                        topAnime={animeContext.topAnime}
                        index={randomIndex}
                    />
                </div>
                <SliderBlock title={"Popular"} topAnime={animeContext.topAnime} />
                <SliderBlock
                    title={"Recomended"}
                    topRecomended={animeContext.topRecomended}
                />
                <SliderBlock title={"Best rated"} topAnime={animeContext.topAnime} />
                <SliderBlock title={"New"} topAnime={animeContext.topAnime} />
            </div>
        </DefaultLayout>
    );
};

export default HomePage;
