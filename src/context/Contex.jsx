import React, { createContext, useEffect, useState } from "react";
import { axiosRequests } from "../servises/axiosRequests";
import { api } from "../servises/api";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [topAnime, setTopAnime] = useState([]);
    const [topRecomended, setTopRecomended] = useState([]);
    
    useEffect(() => {
        axiosRequests.getAnime(api.topAnimeUrl, setTopAnime);
        axiosRequests.getAnime(api.animeRecomendationsUrl, setTopRecomended);
    }, []);
    return (
        <DataContext.Provider
            value={{ topAnime: topAnime, topRecomended: topRecomended }}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
