import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SelectVariants from "./droptow";
import SimpleAccordion from "./droptow";

function DetalleTinerary({ itinerario }) {
  const price = [];
  for (let index = 0; index < itinerario.price; index++) {
    price.push(index);
  }
  return (
    <div className="container">
      <div className="contieneItinerario">
        <div className="card-container">
          <div className="header">
            <a href="#">
              
              <img src={itinerario.userPhoto} />
              <h4 sx={{ color: "black" }}>{itinerario.userName}</h4>
            </a>
          </div>
          <div className="description">
          <h2 className="tituloTinerario">{itinerario.name}</h2>
            <p>{itinerario.description}</p>
            <div className="social">
              <p>🕓{itinerario.time}hs</p>
              {price.map((icon) => (
                <MonetizationOnIcon color="success" key={icon} />
              ))}
              <div className="iconPrice">
                {itinerario.tags.map((tag) => (
                  <p className="textoTinerary" key={tag}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <FavoriteBorderIcon sx={{ color: "pink" }} />            
          </div>
        </div>
      </div>
      <div className="btnDrop">
      <SimpleAccordion />
      </div>
    </div>
  );
}
export default DetalleTinerary;
