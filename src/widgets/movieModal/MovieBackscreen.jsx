import React, { useContext } from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";
import { DataContext } from "../../context/Contex";



const MovieBackscreen = () => {
    const topAnime = useContext(DataContext);

    function сropText(text, maxWords) {
        const words = text.split(' ');
    
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
    
        return text;
    }
    console.log(topAnime);
    return (
        topAnime.data && topAnime.data.length > 0 ? (
            topAnime.data.slice(0, 1).map(anime => (
                <div className="movie-backscreen" key={anime.mal_id}>
                    <DefaultTitle title={anime.title} />
                    <DefaultGreyText text={anime.aired.string} />
                    <DefaultText
                        text={сropText(anime.synopsis,35)} 
                    />
                    <div className="movie-backscreen__genres">
                        <DefaultGreyText text={anime.genres[0].name} />
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={anime.genres[1].name} />
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={anime.genres[2].name} />
                    </div>
                </div>
            ))
        ) : (null)
    );
};

export default MovieBackscreen;