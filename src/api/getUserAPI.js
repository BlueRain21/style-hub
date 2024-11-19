import axios from "axios";

async function getUser(id){
    try{
        const response = await axios.get('https://dummyjson.com/users/'+id);
        // console.log(response);
        return response;
    }catch(error){
        console.error(error);
        throw error;
    }
}

export default getUser;