import React from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieBackscreen from "../../widgets/movieModal/MovieBackscreen";
import homeHeaderImg from "../../assets/img/home-header-img.png";

const HomePage = () => {
    return (
        <DefaultLayout>
            <div className="home">
                <div className="home__header">
                    <img
                        className="home__header-img"
                        src={homeHeaderImg}
                        alt="home-header-img"
                    />
                    <div className="home__header-blur"></div>
                    <Header />
                    <MovieBackscreen />
                </div>
                <div style={{ height: "300px" }}>HomePage</div>
                <div style={{ height: "300px" }}>HomePage</div>
                <div style={{ height: "300px" }}>HomePage</div>
                <div style={{ height: "300px" }}>HomePage</div>
            </div>
        </DefaultLayout>
    );
};

export default HomePage;
