import {NavLink} from "react-router-dom"


export default function CardDetalle(){


    return(
      
<div className="detalleCard">
      <h1 className="h1detalles">The destination you are looking for is not available yet!</h1>
      <NavLink to='/cities' className="btnDetalle"><bottom>Cities</bottom></NavLink>
      
</div>
    )
}