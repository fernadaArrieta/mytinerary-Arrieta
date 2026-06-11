import { NavLink } from "react-router-dom"
import * as React from 'react';
import CarrouselApp from "./carrousel";
import Hero from './hero';


export default function Home(){

    return( 
      <div className="App">   
      
      <Hero/>  
      <h4 className="tituloCarrousel">Popular Mytineraries</h4>     
      <CarrouselApp />
     
      </div>
       );           
    }
