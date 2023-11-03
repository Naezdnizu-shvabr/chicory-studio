import React, { useEffect, useState } from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";
import { animeServices } from "../../servises/animeServices";
import useWindowResize from "../../hooks/useWindowResize";

const MovieBackscreen = ({ topAnime, index }) => {
    const { isFullWidth } = useWindowResize;
    const anime = topAnime[index];

    return anime ? (
        <div className="movie-backscreen" key={anime.mal_id}>
            <DefaultTitle title={anime.title} animeID={anime.mal_id} />
            <DefaultGreyText text={anime.aired.string} />
            <DefaultText
                text={animeServices.сropText(anime.synopsis, isFullWidth ? 25 : 35)}
            />
            <div className="movie-backscreen__genres">
                <DefaultGreyText text={anime.genres[0].name} />
                {anime.genres[1] ? (
                    <>
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={anime.genres[1].name} />
                    </>
                ) : null}
                {anime.genres[2] ? (
                    <>
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={anime.genres[2].name} />
                    </>
                ) : null}
            </div>
        </div>
    ) : null;
};

export default MovieBackscreen;
