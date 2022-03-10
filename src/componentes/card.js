import axios from "axios";
import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardDetalle from './itineraries';
import {Link as LinkRouter} from "react-router-dom"
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'





const CardCiudad=(props)=>{
  const[filter,setFilter]= useState("")
  useEffect(()=>{
  props.getCities()
},[])
  console.log(props)
  
  const datos= props.cities
  console.log(props.cities)
  if (!props.cities){
    return(<h1></h1>)
  }


const search= (event)=>{
  setFilter(event.target.value)
  props.filterCities(event.target.value,props.cities)
}
console.log(props.filterCitiess)

   return(
 <> 
  
   <div className="divSearch">
   <h1 className="h1Search" >Search for a City</h1>
        <label htmlFor="filter"></label>
 <input value={filter} onChange={search} placeholder="Type a city here..."/></div>
    
        <div className='card'  >

          
         {props.filterCitiess.length>0 ?
         props.filterCitiess.map(cadaDato=>
             <Card key={cadaDato._id} sx={{ width: 340, margin:3 }} className="contCard">                     
            <img src={cadaDato.imagen} alt="foto-ciudad" className="imgCard"/> 
              
            
            <CardContent  sx={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
              <Typography gutterBottom variant="h5" component="div">
               {cadaDato.nombre}
              </Typography>
              <Typography variant="body2" color="dark">
              {cadaDato.pais}     
              </Typography>
              <LinkRouter to={`/detail/${cadaDato._id}`}><Button size="small" sx={{display:"flex", alignItems:"center", justifyContent:"center",textDecorationColor:"GrayText"}} className="botonCard">Details</Button></LinkRouter> 
              <CardActions>        
        <Button size="small" sx={{display:"flex", alignItems:"center", justifyContent:"center",textDecorationColor:"GrayText"}} className="botonCard">Learn More</Button>
      </CardActions>
            </CardContent> 
            </Card> 
              
            ):<h2></h2>
} 
                    
               
      
      
      </div> 
      </>
     
       );
  }
 
  const mapDispatchToProps ={
getCities:citiesActions.getCities,
filterCities: citiesActions.filterCities

  }

  const mapStateToProps=(state)=>{
   return{
     cities:state.citiesReducers.cities,
     auxiliar: state.citiesReducers.auxiliar,
     filterCitiess:state.citiesReducers.filterCities,
   }

  }
  export default connect (mapStateToProps, mapDispatchToProps)(CardCiudad);