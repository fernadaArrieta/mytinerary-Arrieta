import axios from "axios";
import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardDetalle from './cardDetalle';
import {Link as LinkRouter} from "react-router-dom"





export default function CardCiudad(props){
   
   const [apiData, setApiData ]= useState([]) 
  
  
    //useEffect(()=>{
     /*  axios.get(`http://localhost:4000/api/cities/`)
   .then(respuesta=>console.log(respuesta.data.response.ciudades))
   },[]) */

   const [filterCities, setFilterCiudad] = useState([])
  
   useEffect(()=>{
    axios.get(`http://localhost:4000/api/cities/`)
    .then(response =>setFilterCiudad(response.data.response.ciudades.filter(cities => cities.nombre.toLowerCase().startsWith(props.input.toLowerCase().trim()))))
},[props.input])

var data = filterCities.length>0 ? filterCities : props.inputSearch === "" ? apiData : []

   return(
  
    <>
         <div className='card'  >
         {data.length>0 ? 
           data.map(datos=>(
             <Card key={datos._id} sx={{ width: 340, margin:3 }} className="contCard">                     
            <img src={datos.imagen} alt="foto-ciudad" className="imgCard"/> 
              
            
            <CardContent  sx={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
              <Typography gutterBottom variant="h5" component="div">
               {datos.nombre}
              </Typography>
              <Typography variant="body2" color="dark">
              {datos.pais}     
              </Typography>
              <LinkRouter to={`/detail/${datos._id}`}><Button size="small" sx={{display:"flex", alignItems:"center", justifyContent:"center",textDecorationColor:"GrayText"}} className="botonCard">Details</Button></LinkRouter>
              {/* <CardActions>        
        <Button size="small" sx={{display:"flex", alignItems:"center", justifyContent:"center",textDecorationColor:"GrayText"}} className="botonCard">Learn More</Button>
      </CardActions>*/}
            </CardContent> 
            </Card> 
              
            ) )
            :<CardDetalle/> 
            
           
     } 
       
        
      
       </div></>
       );
       }
     