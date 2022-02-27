
import axios from 'axios';


export const getApi = async () => {
    try {
        let data = await axios.get(`http://localhost:4000/api/cities`)
        return data
    }
    catch (error) {
        throw error
    }
}

 /* useEffect(()=>{
  axios.get(`http://localhost:4000/api/cities`)
.then(respuesta=>console.log(respuesta.data.response.ciudades))
},[]) */