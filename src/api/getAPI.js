import axios from "axios";

async function getAPI(url){
    axios.defaults.baseURL = "https://667e548b297972455f67e749.mockapi.io/stylesight/";

    try{
        const response = await axios.get(url);
        return response;
    }catch(error){
        throw error;
    }

}

export default getAPI;

