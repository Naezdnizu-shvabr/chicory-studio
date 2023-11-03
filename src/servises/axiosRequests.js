import axios from "axios";

const axiosRequests = {
    getAnime: (topAnimUrl,setTopAnime) => {
        axios.get(topAnimUrl)
            .then((response) => {
                setTopAnime(response.data.data.slice(0,19));
            })
            .catch((error) => {
                console.log(error);
            });
        },
}

export const { getAnime } = axiosRequests;