import { NavLink, useParams } from "react-router-dom";
import * as React from "react";
import DetalleTinerary from "./detalleTinerary";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useEffect, useState } from "react";
import citiesActions from "../redux/actions/citiesActions";

function CardDetalle(props) {
  const params = useParams();
  const id = params.id;

  const {newCity,itineraries}= props

  useEffect(() => {
    //props.getOneCity(id);
    props.getItinerariosPorCiudad(id);
  }, []);
  console.log(props);

  return (
    <>
     {
       itineraries.length>0 
       ? itineraries.map(itinerario=><DetalleTinerary itinerario={itinerario}/>)
       :<h2>We still do not have guides in this city, we are looking for!</h2>
     }
     

      {/* <div className="detalleCard">
        <h1 className="h1detalles">
          The destination you are looking for is not available yet!
        </h1>
        <NavLink to="/cities" className="cta-btn">
          <h5>Cities</h5>
        </NavLink>
      </div> */}
    </>
  );
}
const mapDispatchToProps = {
  //getOneCity: citiesActions.getOneCity,
  getItinerariosPorCiudad :itinerariesActions.getItinerariosPorCiudad, 
};

const mapStateToProps = (state) => {
  return {
    //newCity: state.citiesReducers.newCity,
    itineraries:state.itinerariesReducer.itineraries,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardDetalle);
