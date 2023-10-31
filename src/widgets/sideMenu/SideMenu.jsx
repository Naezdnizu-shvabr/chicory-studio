import React from 'react';
import './../../assets/scss/componentScss/sideMenu.scss';
import {links} from "../../entities/links/config/links";
import Links from "../../entities/links/Links";
import {socialLinks} from "../../entities/links/config/socialLinks";
import SocialLinks from "../../entities/links/SocialLinks";


const SideMenu = () => {
    return (
        <div className="menu">
            {links.map((item, index) => (
                <Links item={item} key={index}/>
            ))}
            {socialLinks.map((item, index) => (
                <SocialLinks item={item} key={index}/>
            ))}
        </div>
    );
};

export default SideMenu;
