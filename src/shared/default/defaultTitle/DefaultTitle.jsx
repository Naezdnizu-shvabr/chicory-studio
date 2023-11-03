import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const DefaultTitle = ({ title, animeID }) => {
    return (
        <div className="default__title">
            <h1 className="default-title">{title}</h1>
            <Link to={`anime/${animeID}/`}>
                <FiExternalLink style={{ fontSize: "30px" }} stroke="white" />
            </Link>
        </div>
    );
};

export default DefaultTitle;
