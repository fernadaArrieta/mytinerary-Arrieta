import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./componentes/header";
import CarrouselApp from "./componentes/carrousel";
import Footer from "./componentes/footer";
import Cities from "./componentes/cities"
import Home from "./componentes/home"
import Hero from "./componentes/hero"


function App() {
  return (
<BrowserRouter>
<ResponsiveAppBar />
<Routes>
      
      <Route path='/' element={
      
      <div className="App">   
     <Home/>
     <Hero/>  
     <h4 className="tituloCarrousel">Popular Mytineraries</h4>     
     <CarrouselApp />
     </div>
    }/> 
    <Route path='*' element={<h1>Web site under construction</h1>}/>
     <Route path='/cities' element= {<Cities/>}/>
   
</Routes>
<Footer/>
</BrowserRouter>
   
  );
}

export default App;
