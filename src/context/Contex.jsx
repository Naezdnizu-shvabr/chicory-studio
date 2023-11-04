import React, { createContext, useEffect, useState } from "react";
import { getAnime } from "../servises/axiosRequests";
import { topAnimeUrl, animeRecomendationsUrl, schedulesUrl } from "../servises/api";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [topAnime, setTopAnime] = useState([]);
    const [topRecomended, setTopRecomended] = useState([]);
    const [scheduledAnime, setSchediledAnime] = useState([]);
    
    useEffect(() => {
        getAnime(topAnimeUrl, setTopAnime);
        getAnime(animeRecomendationsUrl, setTopRecomended);
        getAnime(schedulesUrl, setSchediledAnime);
    }, []);
    return (
        <DataContext.Provider
            value={{
                topAnime: topAnime,
                topRecomended: topRecomended,
                scheduledAnime: scheduledAnime,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
