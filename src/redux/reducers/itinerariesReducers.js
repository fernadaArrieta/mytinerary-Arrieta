import { ITINERARIES_GET } from "../actions/types";

const initialState = {
    itineraries:[],
    auxiliar:[]
   
}

const itinerariesReducer = (state = initialState, action)=>{

    switch(action.type){
        case ITINERARIES_GET:
            
            return {
                ...state,
               itineraries: action.payload,
                auxiliar: action.payload,
            }

            default:
                return state 
        }}
  export default itinerariesReducer      