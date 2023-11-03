import React, { createContext, useEffect, useState } from "react";
import { axiosRequests } from "../servises/axiosRequests";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [topAnime, setTopAnime] = useState([]);
    const [topRecomended, setTopRecomended] = useState([]);
    const topAnimUrl = "https://api.jikan.moe/v4/top/anime";
    const urlRec = "https://api.jikan.moe/v4/recommendations/anime";
    useEffect(() => {
        axiosRequests.getTopAnime(topAnimUrl, setTopAnime);
        axiosRequests.getAnimeRecomendations(urlRec, setTopRecomended);
    }, []);
    console.log(topAnime);
    return (
        <DataContext.Provider
            value={{ topAnime: topAnime, topRecomended: topRecomended }}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
