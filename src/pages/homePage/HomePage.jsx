import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieBackscreen from "../../widgets/movieModal/MovieBackscreen";
import homeHeaderImg from "../../assets/img/home-header-img.png";
import { DataContext } from "../../context/Contex";
import { animeServices } from "../../servises/animeServices";

const HomePage = () => {
    const topAnimeContext = useContext(DataContext);
    const [homeImage, setHomeImage] = useState(homeHeaderImg);
    useEffect(() => {
        animeServices.getTopAnime(topAnimeContext,setHomeImage);
    }, [topAnimeContext]);

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
                    <MovieBackscreen topAnime={topAnimeContext}/>
                </div>
                <div style={{ height: "300px" }}>HomePage</div>
                <div style={{ height: "300px" }}>HomePage</div>
                <div style={{ height: "300px" }}>HomePage</div>
                <div style={{ height: "300px" }}>HomePage</div>
            </div>
        </DefaultLayout>
    );
};

export default HomePage;
