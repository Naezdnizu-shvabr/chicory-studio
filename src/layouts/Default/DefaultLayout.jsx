import React from "react";
import Header from "../../widgets/header/Header";
import SideMenu from "../../widgets/sideMenu/SideMenu";

const DefaultLayout = ({ children }) => {
    return (
        <div className="container">
            <SideMenu />
            <Header />
            {children}
        </div>
    );
};

export default DefaultLayout;
