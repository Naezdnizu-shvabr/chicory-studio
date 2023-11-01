import React, { useContext } from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";
import { animeServices } from "../../servises/animeServices";

const MovieBackscreen = ({topAnime}) => {

    return (
        topAnime.data && topAnime.data.length > 0 ? (
            topAnime.data.slice(0, 1).map(anime => (
                <div className="movie-backscreen" key={anime.mal_id}>
                    <DefaultTitle title={anime.title} />
                    <DefaultGreyText text={anime.aired.string} />
                    <DefaultText
                        text={animeServices.сropText(anime.synopsis,35)} 
                    />
                    <div className="movie-backscreen__genres">
                        <DefaultGreyText text={anime.genres[0].name} />
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={anime.genres[1].name} />
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={anime.genres[2].name} />
                    </div>
                </div>
            ))
        ) : (null)
    );
};

export default MovieBackscreen;