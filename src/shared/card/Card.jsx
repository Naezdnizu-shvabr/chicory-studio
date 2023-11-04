import React from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
import CardGenre from "./ui/CardGenre";
import CardScoreLine from "./ui/CardScoreLine";
import CardTitle from "./ui/CardTitle";
import CardDate from "./ui/CardDate";
const Card = ({ bestRetedAnime }) => {
    const duration = bestRetedAnime.duration.slice(
        0,
        bestRetedAnime.duration.indexOf("per") - 1
    );
    return (
        <div className="card">
            <img
                src={bestRetedAnime ? bestRetedAnime.images.webp.image_url : previewImg}
                alt=""
                className="card__img"
            />
            <div className="card__item-data">
                <CardGenre genres={bestRetedAnime.genres.slice(0, 3)} />
                <CardTitle title={bestRetedAnime.title} />
                <CardDate
                    date={{
                        from: bestRetedAnime.aired.prop.from.year,
                        duration: duration,
                        episodes: bestRetedAnime.episodes,
                    }}
                />
                <CardScoreLine score={bestRetedAnime.score} />
            </div>
        </div>
    );
};

export default Card;
