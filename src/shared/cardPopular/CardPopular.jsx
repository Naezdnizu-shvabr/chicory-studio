import React from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
import CardGenre from "../card/ui/CardGenre";
import CardScoreLine from "../card/ui/CardScoreLine";
import CardTitle from "../card/ui/CardTitle";
import CardDate from "../card/ui/CardDate";
const CardPopular = ({ topAnime }) => {
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

export default CardPopular;
