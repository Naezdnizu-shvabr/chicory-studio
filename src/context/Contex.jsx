import React, { createContext, useEffect, useState } from "react";
import {
    bestRetedURL,
    upcomingAnimeURL,
    fallSeasonsURL,
    schedulesURL,
} from "../servises/api";
import { addToQueue } from "../servises/axiosRequests";
import homeHeaderImg from "../assets/img/home-header-img.png";
import { animeServices } from "../servises/animeServices";
import { getRandomNum } from "../helpers/helpers";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [bestRetedAnime, setBestRatedAnime] = useState([]);
    const [upcomingAnime, setUpcomingAnime] = useState([]);
    const [fallAnimeSeasons, setFallAnimeSeasons] = useState([]);
    const [scheduledAnime, setScheduledAnime] = useState([]);
    const [randomIndex, setRandomIndex] = useState(0);
    const [homeImage, setHomeImage] = useState(homeHeaderImg);

    useEffect(() => {
        addToQueue(upcomingAnimeURL, setUpcomingAnime, 19);
        addToQueue(bestRetedURL, setBestRatedAnime, 19);
        addToQueue(fallSeasonsURL, setFallAnimeSeasons, 19);
        setTimeout(() => {
            addToQueue(schedulesURL, setScheduledAnime, 19);
        }, 1500);
    }, []);

    const updateRandomIndexAndImage = () => {
        const newIndex = getRandomNum(0, bestRetedAnime.length);
        setRandomIndex(newIndex);
        animeServices.getTopAnime(bestRetedAnime, setHomeImage, newIndex);
    };
    console.log(upcomingAnime);
    return (
        <DataContext.Provider
            value={{
                scheduledAnime: scheduledAnime,
                upcomingAnime: upcomingAnime,
                bestRetedAnime: bestRetedAnime,
                fallAnimeSeasons: fallAnimeSeasons,
                randomIndex: randomIndex,
                homeImage: homeImage,
                updateRandomIndexAndImage: updateRandomIndexAndImage,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
