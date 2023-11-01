import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        const getTopAnime = () =>{
            axios
            .get("https://api.jikan.moe/v4/top/anime")
            .then((response) => {
                setTopAnime(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        getTopAnime();
    }, []);
    
    return <DataContext.Provider value={topAnime}>{children}</DataContext.Provider>;
};

export default Context;
