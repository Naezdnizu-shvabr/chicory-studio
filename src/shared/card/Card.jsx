import React from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
import CardGenre from "./ui/CardGenre";
import CardScoreLine from "./ui/CardScoreLine";
import CardTitle from "./ui/CardTitle";
const Card = () => {
    return (
        <div className="card">
            <img src={previewImg} alt="" className="card__img" />
            <div className="card__item-data">
                <CardGenre/>
                <CardTitle title={'Your Name'}/>
                <div className="card__date">2016. 1 h 33 m. 1 ep’s</div>
                <CardScoreLine />
                <div className="card__user-score">User score 93%</div>
            </div>
        </div>
    );
};

export default Card;
