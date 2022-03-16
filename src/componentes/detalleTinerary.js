import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SelectVariants from "./droptow";
import SimpleAccordion from "./droptow";

  function DetalleTinerary({itinerario}){

    const price= []
    for (let index = 0; index < itinerario.price; index++) {
        price.push(index)
        
    }
    return(
       
       <div className="bodyTinerary">
        <div className="contTinerary">     
        <div className="cont-contenido">
        <h1 className="tituloTineray">{itinerario.name}</h1>
          <div className="headerTinerary">
            <img
              className="fotoUsuario"
              src={itinerario.userPhoto}
              alt="fotoUsuario"
            />
            <h3 className="nombreUsuario">{itinerario.userName}</h3>
            <FavoriteBorderIcon sx={{ color: "pink" }} />
          </div>

          <div className="bodyTinerary">
            <h3 className="nombreUsuario">
              {itinerario.description}
            </h3>
            
            <div className="iconPrice">{ 
                price.map(icon=><MonetizationOnIcon color="success" key={icon} />)
                
            }</div>
            
            <p className="textoTinerary">🕓{itinerario.time}hs</p>
            <div className="iconPrice">
            {
                itinerario.tags.map(tag=><p className="textoTinerary" key={tag}>{tag}</p>)
            }</div>
            
          </div>
        </div>
        <div className="btnDrop">
          <SimpleAccordion />
        </div>
      </div></div>
    )
}
export default DetalleTinerary