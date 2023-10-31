import React from "react";
import "./assets/scss/style.scss";
import HomePage from "./pages/homePage/HomePage";
import SideMenu from "./widgets/sideMenu/SideMenu";

const App = () => {
    return (
        <div>
            <HomePage />
            <SideMenu />
        </div>
    );
};

export default App;
