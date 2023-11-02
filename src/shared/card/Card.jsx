import React from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
import CardGenre from "./ui/CardGenre";
import CardScoreLine from "./ui/CardScoreLine";
import CardTitle from "./ui/CardTitle";
import CardDate from "./ui/CardDate";
const Card = ({ topAnime }) => {
    return (
        <div className="card">
            <img
                src={topAnime ? topAnime.images.webp.image_url : previewImg}
                alt=""
                className="card__img"
            />
            <div className="card__item-data">
                <CardGenre genres={topAnime.genres.slice(0, 3)} />
                <CardTitle title={topAnime.title} />
                <CardDate
                    date={{
                        from: topAnime.aired.prop.from.year,
                        duration: topAnime.duration,
                        episodes: topAnime.episodes,
                    }}
                />
                <CardScoreLine score={topAnime.score} />
            </div>
        </div>
    );
};

export default Card;
