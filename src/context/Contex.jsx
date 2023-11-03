import React, { createContext, useEffect, useState } from "react";
import { getAnime } from "../servises/axiosRequests";
import { topAnimeUrl, animeRecomendationsUrl } from "../servises/api";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [topAnime, setTopAnime] = useState([]);
    const [topRecomended, setTopRecomended] = useState([]);
    
    useEffect(() => {
        getAnime(topAnimeUrl, setTopAnime);
        getAnime(animeRecomendationsUrl, setTopRecomended);
    }, []);
    return (
        <DataContext.Provider
            value={{ topAnime: topAnime, topRecomended: topRecomended }}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
