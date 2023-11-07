import React from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";
import useWindowResize from "../../hooks/useWindowResize";
import { PiListMagnifyingGlassThin } from "react-icons/pi";
import { BsBookmarks } from "react-icons/bs";
import { сropText } from "../../servises/animeServices";

const MovieHeader = ({ anime }) => {
    const { isFullWidth } = useWindowResize;

    return anime ? (
        <div className="movie__header" key={anime.mal_id}>
            <div className="movie__header__content">
                <div className="movie__header__title">
                    <div className="movie__header__title-main">
                        <DefaultTitle title={anime.title} animeID={anime.mal_id} />
                        <PiListMagnifyingGlassThin
                            style={{ paddingLeft: "5px", fontSize: "30px" }}
                        />
                    </div>
                    <div className="movie__header__title-second">
                        <h3>Watching</h3>
                        <BsBookmarks />
                    </div>
                </div>
                <DefaultGreyText text={anime.aired.string} />
                <DefaultText text={сropText(anime.synopsis, isFullWidth ? 25 : 35)} />
                <div className="movie__header__genres">
                    <DefaultGreyText text={anime.genres[0].name} />
                    {anime.genres[1] ? (
                        <>
                            <div className="movie__header__dot"></div>
                            <DefaultGreyText text={anime.genres[1].name} />
                        </>
                    ) : null}
                    {anime.genres[2] ? (
                        <>
                            <div className="movie__header__dot"></div>
                            <DefaultGreyText text={anime.genres[2].name} />
                        </>
                    ) : null}
                </div>
            </div>
            <div className="movie__header__image">
                <iframe
                    width="560"
                    height="315"
                    src={anime.trailer.embed_url}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
        </div>
    ) : null;
};

export default MovieHeader;
