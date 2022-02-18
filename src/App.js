import logo from './logo.svg';
import './App.css';
import  ResponsiveAppBar  from './componentes/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CarrouselApp from './componentes/carrousel'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
       <ResponsiveAppBar/>
       
       
       <div className='contenedor'>           
      <img  className='imagen1'src={require('./ciudad de Mendoza/mendoza-capitaljpg.jpg')} />
      <h1 className='isotipo'> "Find your perfect trip, designed by insider who Know and love their cities!"</h1>
      </div>
        </div>
        <CarrouselApp/>
        </BrowserRouter>
    
  );
}

export default App;
