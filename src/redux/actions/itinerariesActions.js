import axios from "axios"
import { ITINERARIES_GET } from "../actions/types";

const itinerariesActions = {
    
    getItinerariosPorCiudad : (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/v1/tineraries/${id}`)          
            
            dispatch ({ type: ITINERARIES_GET, payload:res.data.response})
            
        }
    },
    getOneitinerario : (id) => {
        return async () => {
            try{
                const res = await axios.get(`http://localhost:4000/api/v1/tinerary/${id}`) 
                return res.data.response                
            }catch(error){
                console.log(error)
            }                   
                                   
        }
    },

   likeDislike: (id)=>{
    const token= localStorage.getItem("token")
    return async ()=>{
        try{
            let response= await axios.put(`http://localhost:4000/api/v1/tineraries/likeDislike/${id}`,{},
            { headers:{            
                    'Authorization': 'Bearer ' +token
        }
    })
    console.log (response)
    return response
    }catch (error){
        console.log(error)
    }
       

   } 
}
}
    export default itinerariesActions

   