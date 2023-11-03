import React from "react";
import CardTitle from "../card/ui/CardTitle";
import CardImg from "./ui/CardImg";
import CardMyAnimeList from "./ui/CardMyAnimeList";

const CardRecomended = ({ topRecomended }) => {
    return (
        <div className="card">
            <CardImg img={topRecomended.entry[1].images.webp.image_url} />
            <div className="card__item-data">
                <CardTitle title={topRecomended.entry[1].title} />
                <CardMyAnimeList animeListLink={topRecomended.entry[1].url} />
            </div>
        </div>
    );
};

export default CardRecomended;
