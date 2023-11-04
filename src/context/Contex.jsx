import React, { createContext, useEffect, useState } from "react";
import {
    bestRetedURL,
    animeRecomendationsURL,
    fallSeasonsURL,
    schedulesURL,
} from "../servises/api";
import { addToQueue } from "../servises/axiosRequests";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [bestRetedAnime, setBestRatedAnime] = useState([]);
    const [topRecomended, setTopRecomended] = useState([]);
    const [fallAnimeSeasons, setFallAnimeSeasons] = useState([]);
    const [scheduledAnime, setScheduledAnime] = useState([])
    useEffect(() => {
        addToQueue(bestRetedURL, setBestRatedAnime, 19);
        addToQueue(animeRecomendationsURL, setTopRecomended, 19);
        addToQueue(schedulesURL, setScheduledAnime, 19);
        setTimeout(() => {
            addToQueue(fallSeasonsURL, setFallAnimeSeasons, 19);
        }, 1001);
    }, []);

    return (
        <DataContext.Provider
            value={{
                scheduledAnime: scheduledAnime,
                topRecomended: topRecomended,
                bestRetedAnime: bestRetedAnime,
                fallAnimeSeasons: fallAnimeSeasons,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
