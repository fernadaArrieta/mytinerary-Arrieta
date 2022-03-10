const initialState = {
    cities:[],
    filterCities:[],
    auxiliar:[],
    newCity:{},
   
}

const citiesReducers = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':
            
            return {
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
                filterCities:action.payload,
            }

            case 'filtro':
                const {value,citiesArray}=action.payload
                const filtrado = citiesArray.filter((city => city.nombre.toLowerCase().startsWith(value.toLowerCase().trim())))
    
                return {
                    ...state,
                   filterCities: filtrado
                }

        case "fechearUnaCiudad":
           
            return{
                ...state,
                newCity: action.payload
            }
           
            default:
                return state


        }}
export default citiesReducers