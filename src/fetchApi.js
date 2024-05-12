import axios from "axios";

export const URL = `https://fakestoreapi.com/products`;


export const fetchAllProducts = async () => {
    try{
      const response=  await axios.get(`${URL}`)
      //console.log(`${BACKEND_ENDPOINT}/albums/top`)
        return response.data
    }
    catch(e){
        console.log(e)
        
    }
}

export const fetchCategories = async () => {
    try{
      const response=  await axios.get(`${URL}/categories`)
      //console.log(`${BACKEND_ENDPOINT}/albums/top`)
        return response.data
    }
    catch(e){
        console.log(e)
        
    }
}