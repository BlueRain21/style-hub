import axios from "axios";

async function loginAPI(values){
    
    try{
        const response = await axios.post('https://dummyjson.com/user/login', values);
        // console.log(response);
        return response;
    }catch(error){
        console.error(error);
        throw error;
    }

}

export default loginAPI;