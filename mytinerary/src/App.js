import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./componentes/header";
import CarrouselApp from "./componentes/carrousel";
import Footer from "./componentes/footer";



function App() {
  return (
<BrowserRouter>
<Routes>
{/* <div className="App"> */}
      
      <Route path='/' element={
      
      <div className="App">
        <ResponsiveAppBar />
        <div className="contenedor">
        <img
          className="imagen1"
          src={require("./ciudad de Mendoza/mendoza-capitaljpg.jpg")}
          alt="ciudad"/>
        <h1 className="isotipo">         
          "Find your perfect trip, designed by insider who Know and love their
          cities!"
        </h1></div>             
     <h2 className="tituloCarrousel">Popular Mytineraries</h2>
     <CarrouselApp />
     <Footer/></div>
    }/> 
    <Route path='*' element={<h1>Web site under construction</h1>}/>
     
   
</Routes>
</BrowserRouter>
   
  );
}

export default App;
