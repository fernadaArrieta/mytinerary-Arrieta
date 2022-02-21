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
     

        </div>   );           
    }
