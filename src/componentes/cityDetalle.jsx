import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {NavLink} from "react-router-dom"
import axios from "axios";



export default function CiudadDetalle () {
    const {id} = useParams()
    const [detalleCity, setDetalleCity] = useState([])

    useEffect(()=>{ 
        axios.get(`http://localhost:4000/api/cities/`)             
        .then(response => setDetalleCity(response.data.response.ciudades.filter(cities => cities._id === id)))
    },[id])
    
    //console.log(detalleCity) //chequeamos los datos del filtro
    return ( 
        <>
  
            <div className='contenDetalle'>
                {detalleCity?.map(ciudad => (
                    <div key={ciudad._id} className='CardSola'>
                        <div className="nombreCiudad">
                            <h5 className='textoCard'>Country: {ciudad.pais}</h5>
                            <h5 className='textoCiudad'>City: {ciudad.nombre}</h5> 
                        </div>
                        <img className="cardD" src={`${ciudad.imagen}`} alt={ciudad.nombre} />
                    </div>
                    ))
                }
            </div>
        </>
    )
}