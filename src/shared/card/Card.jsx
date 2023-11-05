import React, { useState } from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
import CardGenre from "./ui/CardGenre";
import CardScoreLine from "./ui/CardScoreLine";
import CardTitle from "./ui/CardTitle";
import CardDate from "./ui/CardDate";
import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";
const Card = ({ anime }) => {
    const [tooltip, setTooltip] = useState(false);
    const [mouseLeft, setMouseLeft] = useState(false);
    const duration = anime.duration.slice(0, anime.duration.indexOf("per") - 1);
    const handleMouseEnter = () => {
        if (!tooltip) {
            setTimeout(() => {
                if (!mouseLeft) {
                    setTooltip(true);
                }
            }, 500);
        }
    };

    const handleMouseLeave = () => {
        setMouseLeft(false); 
        setTooltip(false);
    };

    return (
        <div className="card">
            <img
                src={anime ? anime.images.webp.image_url : previewImg}
                alt=""
                className="card__img"
            />
            <div className="card__item-data">
                <CardGenre genres={anime.genres.slice(0, 3)} />
                <CardTitle title={anime.title} />
                <CardDate
                    date={{
                        from: anime.aired.prop.from.year,
                        duration: duration,
                        episodes: anime.episodes,
                    }}
                />
                <CardScoreLine score={anime.score} />
                <div className="card__anime-list">
                    <Link
                        to={anime.url}
                        className="card__my-anime-list"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <TbExternalLink style={{ fontSize: "20px" }} fill="none" stroke="#8C8C8C"/>
                    </Link>
                    <span
                        className={
                            tooltip
                                ? "card__tool-tip card__tool-tip_active"
                                : "card__tool-tip"
                        }>
                        MyAmileList
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;