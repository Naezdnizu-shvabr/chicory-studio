import React from "react";

const SocialLinks = ({ item }) => {
    return (
        <nav className="menu__nav">
            <img src={item.img} alt={item.img} />
        </nav>
    );
};

export default SocialLinks;
