import axios from "axios"
import { ITINERARIES_GET } from "../actions/types";

const itinerariesActions = {
    getItinerariosPorCiudad : (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/v1/tineraries/${id}`)          
            console.log(res)
            dispatch ({ type: ITINERARIES_GET, payload:res.data.response})
            
        }
    }}
    export default itinerariesActions

   