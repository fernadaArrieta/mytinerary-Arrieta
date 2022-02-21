import { NavLink } from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Home(){

    return( 
        
        <div className="contenedor">
        <img
          className="imagen1"
          src={require("../ciudad de Mendoza/mendoza-capitaljpg.jpg")}
          alt="ciudad"/>
        <h1 className="isotipo">         
          "Find your perfect trip, designed by insider who Know and love their
          cities!"
        </h1>
       
 
    <Stack className="BotonCta" direction="row" spacing={2}>
     <NavLink to='/cities'> <Button className="btnCta" variant="outlined" >MyTineray</Button></NavLink>
      
    </Stack>
 


        </div>   );           
    }
