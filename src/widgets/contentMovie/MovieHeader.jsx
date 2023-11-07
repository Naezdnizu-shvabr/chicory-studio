import React from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";
import useWindowResize from "../../hooks/useWindowResize";
import { PiListMagnifyingGlassThin } from "react-icons/pi";
import { BsBookmarks } from "react-icons/bs";
import { сropText } from "../../servises/animeServices";
import ReactPlayer from "react-player/youtube";

const MovieHeader = ({ anime, isVideoPlaying }) => {
    const { isFullWidth } = useWindowResize;

    return anime ? (
        <div className="movie__header" key={anime.mal_id}>
            <div className="movie__header__content">
                <div className="movie__header__title">
                    <div className="movie__header__title-main">
                        <DefaultTitle title={anime.title} animeID={anime.mal_id} />
                        <PiListMagnifyingGlassThin
                            style={{ minWidth: "20px", minHeight: "20px" }}
                        />
                    </div>
                    <div className="movie__header__title-second">
                        <h3>
                            <DefaultGreyText text={"Watching"} />
                        </h3>
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
                <ReactPlayer
                    url={
                        anime.trailer.embed_url ||
                        "https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    }
                    volume={0.05}
                    controls={true}
                    loop={true}
                    playing={isVideoPlaying}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 },
                        },
                    }}
                />
            </div>
        </div>
    ) : null;
};

export default MovieHeader;
