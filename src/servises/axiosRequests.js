import axios from "axios";

const axiosRequests = {
    getTopAnime: (topAnimUrl,setTopAnime) => {
        axios.get(topAnimUrl)
            .then((response) => {
                setTopAnime(response.data.data.slice(0,19));
            })
            .catch((error) => {
                console.log(error);
            });
        },
        getAnimeRecomendations: (urlRec,setTopRecomended)=>{
            axios.get(urlRec)
                .then((response) => {
                    setTopRecomended(response.data.data.slice(0,19))
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        
}

export {axiosRequests}