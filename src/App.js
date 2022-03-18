import React, {useEffect, useState} from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./componentes/header";
import CarrouselApp from "./componentes/carrousel";
import Footer from "./componentes/footer";

import Home from "./componentes/home"
import Hero from "./componentes/hero"
import axios from 'axios'
import CardCiudad from './componentes/card';
import CardDetalle from './componentes/itineraries'
import CiudadDetalle from './componentes/cityDetalle'
import FormRegistro from './componentes/SingUp/SignUp';
import SignIn from './componentes/SingUp/SignIn';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';

function App(props) {
  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  },[])

  return ( 
    
  
<BrowserRouter>
<ResponsiveAppBar />

<Routes>
      
      <Route path='/' element={
      <Home/> }/> 
    <Route path='*' element={<Home/>}/>
     <Route path='/cities' element= {<CardCiudad/>}/>
    {/*  <Route path ='/city' element={<CardCiudad/>} /> */}
  {/*  <Route path='/detail/:id' element={<CiudadDetalle/>}/> */}
   <Route path='/detail/:id' element={<CardDetalle/>}/>
   <Route path='/signup' element={<FormRegistro/>}/>
   <Route path='/signin' element={<SignIn/>}/>
     
</Routes>

<Footer/>
</BrowserRouter>
   
  );
}

const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,

}

export default connect (null, mapDispatchToProps) (App);
