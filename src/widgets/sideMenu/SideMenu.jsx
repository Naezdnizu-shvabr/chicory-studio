import React from "react";
import "./../../assets/scss/componentScss/sideMenu.scss";
import { links } from "../../entities/links/config/links";
import Links from "../../entities/links/Links";
import { socialLinks } from "../../entities/links/config/socialLinks";
import SocialLinks from "../../entities/links/SocialLinks";
import themeIcon from "../../assets/icons/Theme button.svg";

const SideMenu = () => {
    return (
        <div className="menu">
            <h2 className="menu__title">Login</h2>
            <nav className="menu__nav">
                {links.map((item, index) => (
                    <Links item={item} key={index} />
                ))}
            </nav>
            <span className="menu__line"></span>
            <Links item={{ name: "Theme", img: themeIcon }} />
            <nav className="menu__nav-social">
                {socialLinks.map((item, index) => (
                    <SocialLinks item={item} key={index} />
                ))}
            </nav>
        </div>
    );
};

export default SideMenu;
