import axios from "axios";

async function postAPI(url, value){
    axios.defaults.baseURL = "https://667e548b297972455f67e749.mockapi.io/stylesight/";

    try{
        const response = await axios.post(url, value);
        return response;
    }catch(error){
        throw error;
    }
}

export default postAPI;