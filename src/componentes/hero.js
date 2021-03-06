
import { NavLink } from "react-router-dom";
import "../styles/hero.css";

export default function Hero(){

    return(
        <div className="seccion">
            <div className="backgroundCaja">                
            </div>
            <div className="contenido">
                <div className="cta-col col1">
                    <div className="col-contenido">
                        <h2 sx={{color:"#026197"}}>MyTinerary</h2>
                        <p>Find Your Perfect Trip Inside who know and love their cities!!</p>
                    </div>
                </div>
                <div className="cta-col col2">
                    <div className="col-contenido">
                        <div className="btn-holder">
                           <NavLink to='/cities' className="cta-btn"><h5>View all cities here!</h5></NavLink>
                        </div>
                    </div>
           </div>
           </div>  
        </div>
    )



}