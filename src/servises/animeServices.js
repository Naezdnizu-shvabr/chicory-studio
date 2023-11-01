const animeServices = {
    getTopAnime: (topAnime,setHomeImage) => {
    
            if (topAnime.data && topAnime.data.length > 0) {
                setHomeImage(topAnime.data[0].images.webp.large_image_url);
            }
        
            return topAnime;
        },
    сropText: (text, maxWords) => {
        const words = text.split(' ');
    
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
    
        return text;
    },
    
}



export {animeServices};

