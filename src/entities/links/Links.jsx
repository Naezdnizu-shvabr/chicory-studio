import React from "react";

const Links = ({ item }) => {
    return (
        <nav className="menu__nav">
            <img src={item.img} alt={item.img} />
            <div>{item.name}</div>
        </nav>
    );
};

export default Links;
