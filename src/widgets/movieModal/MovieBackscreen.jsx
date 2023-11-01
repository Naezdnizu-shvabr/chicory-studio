import React from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";

const genres = ["Romantic", "Adventure", "Mystery", "Romantic", "Adventure", "Mystery"];

const MovieBackscreen = () => {
    return (
        <div className="movie-backscreen">
            <DefaultTitle title="Your name" />
            <DefaultGreyText text="2016. 1 h 33 m. 11 ep’s" />
            <DefaultText
                text="The story is about a boy from Tokyo and a girl from the provinces
             who discover that there is a strange and inexplicable connection between them.
             In their dreams, they change bodies and live each other's lives. "
            />
            <div className="movie-backscreen__genres">
                <DefaultGreyText text={genres[0]} />
                <div className="movie-backscreen__dot"></div>
                <DefaultGreyText text={genres[1]} />
                <div className="movie-backscreen__dot"></div>
                <DefaultGreyText text={genres[2]} />
            </div>
        </div>
    );
};

export default MovieBackscreen;
