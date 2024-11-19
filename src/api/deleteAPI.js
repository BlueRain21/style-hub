import axios from "axios";

async function deleteAPI(url){
    axios.defaults.baseURL = "https://667e548b297972455f67e749.mockapi.io/stylesight/";

    // alert(url);

    try{
        const response = axios.delete(url);
        return response;
    }catch(error){
        throw error;
    }

}

export default deleteAPI;