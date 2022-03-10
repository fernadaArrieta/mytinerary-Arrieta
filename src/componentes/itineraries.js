import { NavLink, useParams } from "react-router-dom";
import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SelectVariants from "./droptow";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useEffect, useState } from "react";
import citiesActions from "../redux/actions/citiesActions";

function CardDetalle(props) {
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    props.getOneCity(id);
  }, []);
  console.log(props);

  return (
    <>
      <div className="contTinerary">
        <h1 className="tituloTineray">Hard Rock Coffe</h1>

        <div className="cont-contenido">
          <div className="headerTinerary">
            <img
              className="fotoUsuario"
              src="https://media.revistagq.com/photos/5ca5faccd71dd9afe59582ae/1:1/w_1165,h_1165,c_limit/brad_pitt_50_anos_hombre_joven_cuidados_cosmetica_678.jpg"
              alt="fotoUsuario"
            />
            <h3 className="nombreUsuario">Brad Pitt</h3>
            <FavoriteBorderIcon sx={{ color: "pink" }} />
          </div>

          <div className="bodyTinerary">
            <h3 className="nombreUsuario">
              Excellent place to have a good time and have good drinks!!!
            </h3>

            <MonetizationOnIcon color="success" />
            <p className="textoTinerary">duracion:2 hrs</p>
            <p className="textoTinerary">#hastrag #hastrag #hastrag</p>
          </div>
        </div>
        <div className="btnDrop">
          <SelectVariants />
        </div>
      </div>

      <div className="detalleCard">
        <h1 className="h1detalles">
          The destination you are looking for is not available yet!
        </h1>
        <NavLink to="/cities" className="cta-btn">
          <h5>Cities</h5>
        </NavLink>
      </div>
    </>
  );
}
const mapDispatchToProps = {
  getOneCity: citiesActions.getOneCity,
};

const mapStateToProps = (state) => {
  return {
    newCity: state.citiesReducers.newCity,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardDetalle);
