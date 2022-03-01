import React, {useEffect, useState} from 'react'
import {Link as LinkRouter} from "react-router-dom"
import CardCiudad from './card';
 import axios from 'axios';
 
 export default function Cities() {

 const [input,setInput]=useState("")

  

/* console.log(apidata) */
   return (    

    <div className='contenedorCard'>
   <div className="divSearch">
   <h1 className="h1Search" >Search for a City</h1>
        <label htmlFor="filter"></label>
       <input onKeyUp={(event)=>setInput(event.target.value)} placeholder="Type a city here..."></input>
       <CardCiudad input={input}/>
     </div></div>
     );
 }

     


 
     
  
