import React from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
import CardGenre from "./ui/CardGenre";
import CardScoreLine from "./ui/CardScoreLine";
import CardTitle from "./ui/CardTitle";
import CardDate from "./ui/CardDate";
const Card = ({ anime }) => {
    const duration = anime.duration.slice(
        0,
        anime.duration.indexOf("per") - 1
    );
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
            </div>
        </div>
    );
};

export default Card;
