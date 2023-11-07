import React, { useContext, useState } from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieHeader from "../../widgets/contentMovie/MovieHeader";
import { DataContext } from "../../context/Contex";
import MovieSlider from "../../widgets/movieSlider/MovieSlider";

const MoviePage = () => {
    const animeContext = useContext(DataContext);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    return (
        <DefaultLayout>
            <div className="movie">
                <Header showNavigation={false} />
                <img
                    className="movie__bg"
                    src={animeContext.currentAnime.images.webp.large_image_url}
                    alt={animeContext.currentAnime.title}
                />
                <MovieHeader anime={animeContext.currentAnime} isVideoPlaying={isVideoPlaying}/>
                <MovieSlider
                    isVideoPlaying={isVideoPlaying}
                    setIsVideoPlaying={setIsVideoPlaying}
                    title={"Preview"}
                    anime={animeContext.currentAnime}
                />
            </div>
        </DefaultLayout>
    );
};

export default MoviePage;
