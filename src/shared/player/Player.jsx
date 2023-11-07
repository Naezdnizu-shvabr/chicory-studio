import React from "react";
import ReactPlayer from "react-player";

const Player = ({ url, width, height }) => {
    return (
        <ReactPlayer
            url={url || "https://www.youtube.com/watch?v=ysz5S6PUM-U"}
            width={width}
            height={height}
            volume={0.3}
            controls={true}
            loop={true}
            config={{
                youtube: {
                    playerVars: { showinfo: 1 },
                },
            }}
        />
    );
};

export default Player;
