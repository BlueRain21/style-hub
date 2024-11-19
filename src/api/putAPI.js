import axios from "axios";


async function putAPI (url, value){
    axios.defaults.baseURL = "https://667e548b297972455f67e749.mockapi.io/stylesight/";

    try{
        // console.log(url);
        const response = await axios.put(url, value);
        return response;
    }catch(error){
        throw error;
    }
}


export default putAPI;


