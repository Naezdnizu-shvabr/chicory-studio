import React from "react";

const Links = ({ item }) => {
    return (
        <div className="menu__nav-link">
            <img className="menu__nav-img" src={item.img} alt={item.img} />
            <div className="menu__nav-name">{item.name}</div>
        </div>
    );
};

export default Links;
