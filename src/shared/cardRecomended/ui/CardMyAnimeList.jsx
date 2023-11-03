import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
const CardMyAnimeList = ({ animeListLink }) => {
    const animeLink = animeListLink;
    return (
        <ul className="card__anime-list">
            <li>
                <h2 className="card__anime-list-title">MyAnimeList:</h2>
            </li>
            <li>
                <Link className="card__anime-list-link" to={animeLink}>
                    <AiOutlineLink style={{ fontSize: "20px" }} />
                </Link>
            </li>
        </ul>
    );
};

export default CardMyAnimeList;
