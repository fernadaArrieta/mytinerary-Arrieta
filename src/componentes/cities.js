import React, {useEffect, useState} from 'react'

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
     </div>
     </div>
     );
 }

     {/*    <div>
    <h1>FROM API SEARCH</h1>
    <div style={{display:'flex', flexDirection:'row', flexWrap:"wrap"}}>
    {data?.map(datos =>
        <div >
            <div ><img src={datos.image} alt={datos.name}/></div>
            <div>{datos.name}</div>
        </div>
    )}
    </div>
</div>  */}


 
     
  
