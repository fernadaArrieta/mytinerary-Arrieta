import axios from "axios"
const citiesActions = {
    
 getCities : () => {
    return async (dispatch,getState) => {
       const response = await axios.get('http://localhost:4000/api/cities/')
console.log(response.data)
       dispatch({type:'fetch', payload:response.data.response.ciudades}) 
    }
 },
 filterCities: (value,citiesArray) => {
     return (dispatch, getState) => {
         dispatch ({type: 'filtro', payload:{value,citiesArray}})
     }
 },
  getOneCity: (id) => {
     return async(dispatch, getState) => {
         const response= await axios.get('http://localhost:4000/api/ciudades/'+id)
         console.log(response.data)
         dispatch ({type: 'fechearUnaCiudad',  payload: response.data.response})
     }
 }  
}

export default citiesActions