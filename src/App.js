import React, {useEffect, useState} from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./componentes/header";
import CarrouselApp from "./componentes/carrousel";
import Footer from "./componentes/footer";
import Cities from "./componentes/cities"
import Home from "./componentes/home"
import Hero from "./componentes/hero"
import axios from 'axios'
import CardCiudad from './componentes/card';

const App = () => {



  return (
  
    
  
<BrowserRouter>
<ResponsiveAppBar />

<Routes>
      
      <Route path='/' element={
      <Home/> }/> 
    <Route path='*' element={<Home/>}/>
     <Route path='/cities' element= {<Cities/>}/>
     <Route path ="/card/:id" element={<CardCiudad/>} /> 
   
</Routes>
<Footer/>
</BrowserRouter>
   
  );
}

export default App;
