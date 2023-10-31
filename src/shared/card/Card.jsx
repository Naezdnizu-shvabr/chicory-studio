import React from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
import CardGenre from "./ui/CardGenre";
import CardScoreLine from "./ui/CardScoreLine";
import CardTitle from "./ui/CardTitle";
import CardDate from "./ui/CardDate";
const Card = () => {
    return (
        <div className="card">
            <img src={previewImg} alt="" className="card__img" />
            <div className="card__item-data">
                <CardGenre />
                <CardTitle title={"Your Name"} />
                <CardDate />
                <CardScoreLine />
            </div>
        </div>
    );
};

export default Card;
