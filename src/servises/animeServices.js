const animeServices = {
    getTopAnime: (topAnime, setHomeImage,index) => {
        if (topAnime && topAnime.length > 0) {
            if(setHomeImage){
                setHomeImage(topAnime[index].images.webp.large_image_url);
            }
        }

        return topAnime;
    },
    сropText: (text, maxWords) => {
        const words = text.split(" ");

        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(" ") + "...";
        }

        return text;
    },
};

export { animeServices };
