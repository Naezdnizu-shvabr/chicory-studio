import React, { createContext, useEffect, useState } from "react";
import {
    bestRetedURL,
    animeRecomendationsURL,
    fallSeasonsURL,
    schedulesURL,
} from "../servises/api";
import { addToQueue } from "../servises/axiosRequests";
import homeHeaderImg from "../assets/img/home-header-img.png";
import { animeServices } from "../servises/animeServices";
import { getRandomNum } from '../helpers/helpers'

export const DataContext = createContext();

const Context = ({ children }) => {
    const [bestRetedAnime, setBestRatedAnime] = useState([]);
    const [topRecomended, setTopRecomended] = useState([]);
    const [fallAnimeSeasons, setFallAnimeSeasons] = useState([]);
    const [scheduledAnime, setScheduledAnime] = useState([])
    const [randomIndex, setRandomIndex] = useState(0);
    const [homeImage, setHomeImage] = useState(homeHeaderImg);

    useEffect(() => {
        addToQueue(bestRetedURL, setBestRatedAnime, 19);
        addToQueue(animeRecomendationsURL, setTopRecomended, 19);
        addToQueue(schedulesURL, setScheduledAnime, 19);
        setTimeout(() => {
            addToQueue(fallSeasonsURL, setFallAnimeSeasons, 19);
        }, 1001);
    }, []);

    const updateRandomIndexAndImage = () => {
        const newIndex = getRandomNum(0, bestRetedAnime.length);
        setRandomIndex(newIndex);
        animeServices.getTopAnime(bestRetedAnime, setHomeImage, newIndex);
    };

    return (
        <DataContext.Provider
            value={{
                scheduledAnime: scheduledAnime,
                topRecomended: topRecomended,
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
