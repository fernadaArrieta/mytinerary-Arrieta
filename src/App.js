import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./componentes/header";
import CarrouselApp from "./componentes/carrousel";
import Footer from "./componentes/footer";

function App() {
  return (
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
        </h1>
      </div>
      <h2>Popular Mytineraries</h2>
      <CarrouselApp />
      <Footer/>
    </div>
  );
}

export default App;
