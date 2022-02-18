import logo from './logo.svg';
import './App.css';
import  ResponsiveAppBar  from './componentes/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CarrouselApp from './componentes/carrousel'
import Cities from './componentes/cities'
import { Link as LinkRouter } from "react-router-dom"
import Footer from './componentes/footer';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      
       <ResponsiveAppBar/>
              
       <div className='contenedor'>           
      <img  className='imagen1'src={require('./ciudad de Mendoza/mendoza-capitaljpg.jpg')} alt="ciudad" />
      <h1 className='isotipo'> "Find your perfect trip, designed by insider who Know and love their cities!"</h1>
      </div>
        
        <h2>Popular Mytineraries</h2>
        <Routes>
        
        <Route path='/'element={<CarrouselApp/>}/>
        {/* <Route path='*'element={<Cities/>}/>  */}
        
        </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
        
        </div>
       
        
    
        
    
  );
}

export default App;
