import React from "react";
import previewImg from "../../assets/img/74fcdac8b3b0094a437b15bc54389849.webp";
const Card = () => {
    return (
        <div className="card">
            <img src={previewImg} alt="" className="card__img" />
            <div className="card__item-data">
                <ul className="card__genre">
                    <li className="card-ganre-link">Action</li>
                    <span>·</span>
                    <li className="card-ganre-link">Adventure</li>
                    <span>·</span>
                    <li className="card-ganre-link">Fantasy</li>
                </ul>
                <h2 className="card__title">Your Name</h2>
                <div className="card__date">2016. 1 h 33 m. 1 ep’s</div>
                <span className="card__score-line"></span>
                <div className="card__user-score">User score 93%</div>
            </div>
        </div>
    );
};

export default Card;
