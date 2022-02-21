
import "../styles/hero.css";

export default function Hero(){

    return(
        <div className="seccion">
            <div className="backgroundCaja">                
            </div>
            <div className="contenido">
                <div className="cta-col col1">
                    <div className="col-contenido">
                        <h2>Find Your Perfect Trip</h2>
                        <p>Inside who know and love their cities!!</p>
                    </div>
                </div>
                <div className="cta-col col2">
                    <div className="col-contenido">
                        <div className="btn-holder">
                            <a href="/cities" className="cta-btn">Cities</a>
                        </div>
                    </div>
           </div>
           </div>  
        </div>
    )



}