import React from "react";
import { Link } from "react-router-dom";

const Links = ({ item }) => {
    return (
        <Link to={item.to} className="menu__nav-link">
            <div>{item.img}</div>
            <div className="menu__nav-name">{item.name}</div>
        </Link>
    );
};

export default Links;
