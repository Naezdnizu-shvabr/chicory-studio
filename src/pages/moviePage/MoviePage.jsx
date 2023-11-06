import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieHeader from "../../widgets/contentMovie/MovieHeader";
import { DataContext } from "../../context/Contex";
import homeHeaderImg from "../../assets/img/home-header-img.png";
import { getRandomNum } from "../../helpers/helpers";
import { useParams } from "react-router-dom";
import MovieSlider from "../../widgets/movieSlider/MovieSlider";
import {getAnime} from "../../servises/animeServices";

const MoviePage = () => {
    const { id } = useParams();
    const animeContext = useContext(DataContext);
    const [randomIndex, setRandomIndex] = useState(0);
    const [homeImage, setHomeImage] = useState(homeHeaderImg);

    useEffect(() => {
        setRandomIndex(getRandomNum(0, animeContext.topAnime.length));
    }, [animeContext.topAnime]);

     // useEffect(() => {
     //     animeContext.getAnime(animeContext.animeToShow || animeContext.anime, setHomeImage, animeContext.newIndex);
     //    }, []);

    // const img = animeContext.upcomingAnime.filter((res) => res.mal_id === Number(id));
    console.log(animeContext.anime);

    return (
        <DefaultLayout>
            <Header showNavigation={false} />
            <div
                className="movie"
                // style={{ backgroundImage: img[0].images.webp.large_image_url }}>
            >
                <MovieHeader topAnime={animeContext.topAnime} index={randomIndex} />
                <MovieSlider Block title={"Preview"} topAnime={animeContext.topAnime} />
            </div>
        </DefaultLayout>
    );
};

export default MoviePage;
